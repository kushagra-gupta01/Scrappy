const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		username: { type: String, required: true },
		locality: { type: String, required: true },
		points: { type: Number },
		verified: { type: Boolean, default: false },
	},
	{ collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model 