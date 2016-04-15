<h1 align="center">
  <a href="https://www.npmjs.com/package/twifo"><img src="http://rishigiri.com/github/twifo.png" alt="twifo" width="400"></a>
  <br>
</h1>

[![Build Status](https://travis-ci.org/CodeDotJS/twifo.svg?branch=master)](https://travis-ci.org/CodeDotJS/twifo)

> Get user information of a Twitter User


## Install

```
$ npm install --save twifo
```

## Usage

```js
const twifo = require('twifo');

twifo('pakalupapito').then(user => {
	console.log(user);
	/*
	{
		name: 'pakalu papito',
		handle: 'pakalupapito',
		bio: 'started from gas station now we here',
		tweet: '2,240',
		followers: '1.51M',
		following: '174',
		likes: '2,349'

	}
	*/
});
```

__NOTE__ : will be *null* if value isn't available.

## Related

- [npm-user](https://github.com/sindresorhus/npm-user) Similar module for npm.

## License

MIT - Copyright &copy; [Rishi Giri](http://rishigiri.com)

- Creadits : SS