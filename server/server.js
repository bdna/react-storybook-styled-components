const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
	const raw = fs.readFileSync('server/data.json');
	const data = JSON.parse(raw);
	
	// TODO: make google places API call and add to data
	
	res.send(data)
});

// NYI
app.put('/', (req, res) => {
	res.send('posted')
});

app.listen(port, () => console.log(`Server listening on ${port}`));
