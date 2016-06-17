'use strict';

const twifo = require('./index.js');

twifo('pakalupapito').then(user => {
	console.log(user);
});
