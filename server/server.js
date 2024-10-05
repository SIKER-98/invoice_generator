const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/api/company', (req, res) => {
  const company = require('./company[2].json');
  res.json(company);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
