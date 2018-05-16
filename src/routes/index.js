// Packages
const express = require('express');
const router = express.Router();

// Ours

router.get('/', (req,res) => {
	res.send('Hello World!')
});


module.exports = router;
