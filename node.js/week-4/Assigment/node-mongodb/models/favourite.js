var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var favouriteSchema = new Schema({
		dishes:[{
			type : mongoose.Schema.Types.ObjectID,
			ref:'dish'
		}]
		postedBy: {
        		type: mongoose.Schema.Types.ObjectId,
        		ref: 'User'
    		}
	    		
	
	}, 
	{
    		timestamps: true
	});
var  Favourites = mongoose.model('favourite',favouriteSchema);
module.exports = Favourites;

