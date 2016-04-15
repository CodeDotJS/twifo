import test from 'ava';
import fn from './';

test(async t => {
	const user = await fn('pakalupapito');

	t.is(user.name, 'pakalu papito');
	t.is(user.handle, 'pakalupapito');
	t.is(user.bio, 'started from gas station now we here.');
	t.is(user.tweets, '2,242');
	t.is(user.followers, '1.51M');
	t.is(user.following, '174');
	t.is(user.likes, '2,349');
});
