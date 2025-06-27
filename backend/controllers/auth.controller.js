// backend/controllers/auth.controller.js

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Temporary dummy logic (replace with real DB lookup later)
  if (email === 'admin@example.com' && password === 'password123') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};
