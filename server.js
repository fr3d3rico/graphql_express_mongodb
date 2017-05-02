const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const personRouter = require('./routes/personRouter');

const SERVER_PORT = "3000";

//MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/graphql');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected on MongoDB!');
});

//ExpressJS
const app = express();

//routes
app.use('/people', personRouter);

//Graphql
app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));

app.listen(SERVER_PORT, () => {
  console.log('Listening on port ', SERVER_PORT);
});
