var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var favouriteSchema = new Schema({
		dishes:[{
			type : mongoose.Schema.Types.ObjectID,
			ref:'dish'
		}]
		users: {
        		type: mongoose.Schema.Types.ObjectId,
        		ref: 'User'
    		}
	    		
	
	}, 
	{
    		timestamps: true
	});
var  favourites = mongoose.model('favourite',favouriteSchema);
module.exports = favourites;

