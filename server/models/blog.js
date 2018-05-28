const mongoose = require('mongoose');

const Blog = mongoose.model('Blog', {
	title: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
    }, 
    description: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
	body: {
		type: String,
        required: true,
        minlength: 1,
        trim: true
	},
	author: {
		type: String,
        required: true,
        minlength: 1,
        trim: true
	}
	// _creator: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	required: true
	// }
});

module.exports = {
	Blog
}