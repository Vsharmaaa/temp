// 

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

// MongoDB connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// HighScore Schema
const highScoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  score: { type: Number, required: true },
});

const HighScore = mongoose.model('HighScore', highScoreSchema);

// Save high score
app.post('/api/highscores', (req, res) => {
  const newHighScore = new HighScore(req.body);
  newHighScore.save()
    .then(() => res.json('High score added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get high scores
app.get('/api/highscores', (req, res) => {
  HighScore.find()
    .sort({ score: -1 })
    .limit(10)
    .then(highscores => res.json(highscores))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Remove all high scores
app.delete('/api/highscores', (req, res) => {
  HighScore.deleteMany({})
    .then(() => res.status(204).end()) // No Content
    .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
