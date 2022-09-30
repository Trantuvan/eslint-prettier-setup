const express = require('express');

const app = express();
app.listen(3000, (res) => {
  res.send('hello world');
});
