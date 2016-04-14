'use strict';

var cheerio = require('cheerio');

var Promise = require('pinkie-promise');

var got = require('got');

module.exports = function (username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	var url = 'https://www.twitter.com/' + username;

	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);

		return {
			name: $('a.ProfileHeaderCard-nameLink').text() || null,

			handle: $('.ProfileHeaderCard-screennameLink').attr('href').replace('/', '') || null,

			bio: $('.ProfileHeaderCard-bio').text() || null,

			joined: $('.ProfileHeaderCard-joinDateText').text().replace('Joined', '').replace(/ +/, '') || null,

			tweets: $('.ProfileNav-value').eq(0).text() || null,

			following: $('.ProfileNav-value').eq(1).text() || null,

			followers: $('.ProfileNav-value').eq(2).text() || null,

			likes: $('.ProfileNav-value').eq(3).text() || null

		};
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'Not a Twitter User.';
		}

		throw err;
	});
};
