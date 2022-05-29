const { urlencoded } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const apiRouter = require('./routes/api');

app.use(express.static('public'));
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    }
);

module.exports = app;