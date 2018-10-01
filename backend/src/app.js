const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(8081)

var Message = require("../models/message");

var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/messages', { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
	console.log("Connection Succeeded");
});

app.get('/messages', (req, res) => {
	Message.find({}, 'message', function (error, messages) {
		if (error) { console.error(error); }
		res.send({
			messages: messages
		})
	}).sort({ _id: -1 })
})

app.post('/messages', (req, res) => {
	var db = req.db;
	var message = req.body.message;
	var new_message = new Message({
		message: message
	})
	new_message.save(function (error) {
		if (error) {
			console.log(error)
		}
		res.send({
			success: true,
			message: 'Message added successfully!'
		})
	})
})

app.delete('/messages/:id', (req, res) => {
	var db = req.db;
	Message.remove({
	  _id: req.params.id
	}, function(err, post){
	  if (err)
		res.send(err)
	  res.send({
		success: true
	  })
	})
  })
