// Packages
const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

// Ours

router.get('/', (req, res) => {
	res.send('Hello World!')
});


module.exports = router;
