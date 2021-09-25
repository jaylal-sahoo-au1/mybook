import mongoose from 'mongoose';

function initDB() {
	if (mongoose.connections[0].readyState) {
		console.log('already connected');
		return;
	}
	mongoose.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
	});
	mongoose.connection.on('connected', () => {
		console.log('mongoose connected');
	});
	mongoose.connection.on('error', (err) => {
		console.log('mongoose error', err);
	});
}

export default initDB;
