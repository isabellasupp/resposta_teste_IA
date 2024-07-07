
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://teste2:teste2@cluster0.9pr7ozz.mongodb.net/?appName=Cluster0';

mongoose.connect(dbURI)
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log('Database connection error: ', err));
