const db = require("../config/db");
const path = require("path");

exports.getAll = (req, res) => {
  db.query("SELECT * FROM sermons_events ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.create = (req, res) => {
  const text = req.body.text || "";
  const file = req.file;

  const fileUrl = file ? `/uploads/${file.filename}` : null;
  const fileType = file ? file.mimetype : null;

  db.query(
    "INSERT INTO sermons_events (text, fileUrl, fileType) VALUES (?, ?, ?)",
    [text, fileUrl, fileType],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId });
    }
  );
};

exports.delete = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM sermons_events WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
};
