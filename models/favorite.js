const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var favoriteSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		unique: true
	},
	dishes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Dish'
	}],
	}, {
	usePushEach: true
});

var Favorites = mongoose.model('Favorites', favoriteSchema);

module.exports = Favorites;
