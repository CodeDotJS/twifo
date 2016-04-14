const twifo = require('./index.js');

twifo('Rishi_Giri_').then(user => {
    console.log(user);
    /*
    {
        name: 'pakalu papito',
        handle: 'pakalupapito',
        bio: 'started from gas station now we here',
        tweet: '2,239',
        followers: '1.51M',
        following: '174',
        likes: '2,349'

    }
    */
});