const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use('/static', express.static('public'))

// localhost:8000
app.get('/', (req, res) => {
	res.render('home')
})

const notes = ['first note', 'second note', 'third one']

// localhost:8000/notes
app.get('/notes', (req, res)=>{
	res.render('notes')
})




// localhost:8000/create
app.get('/create', (req, res) => {
	res.render('create')
})

app.listen(8000, err => {
	if (err) console.log(err)

	console.log('App is running...')
})
