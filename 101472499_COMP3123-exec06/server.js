const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const DB_URL = process.env.DB_URL || "mongodb+srv://generalgva_db_user:nnKTh7mVty80kBYs@viktordatabase.mtcvpgk.mongodb.net/notesdb";
const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

const noteRoutes = require('./routes/NoteRoutes.js');
app.use('/', noteRoutes);

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connected to MongoDB Atlas");
    app.listen(PORT, () => {
        console.log(` Server is listening on port ${PORT}`);
    });
})
.catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
