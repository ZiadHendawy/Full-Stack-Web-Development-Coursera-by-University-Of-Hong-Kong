
var express = require('express');
 var bodyParser = require('body-parser');
var Verify = require('./verify');
var mongoose = require('mongoose');
var favourites = require('../models/favourites');
var favouriteRouter = express.Router();
 
favouriteRouter.use(bodyParser.json());

favouriteRouter.route('/')


  .get(Verify.verifyOrdinaryUser,function(req,res,next){
    	favourites.find({'postedBy': req.decoded._doc._id}).populate('favourites.users').populate('favourites.dishes').exec(function(err,favourite){
		if(err) throw err;
		res.json(favourite);	
	});

  })

  .post(Verify.verifyOrdinaryUser,function(req, res, next){
   	favourites.find({'postedBy':req.decoded._doc._id}).exec(
		function(err,favourite){
			if(err)throw err;
			var favoriteAlreadyExist = false;
                   	 if (favorites[0].dishes.length) {
                        	for (var i = (favorites[0].dishes.length - 1); i >= 0; i--) {
                           		favoriteAlreadyExist = favorites[0].dishes[i] == req.body._id;
                            		if (favoriteAlreadyExist) break;
                        	}
			
			if(favoriteAlreadyExist) {res.json(favourite);}
			else{
				favourites[0].dishes.push(req._id);
				favourites[0].save(function(err,favorite){
						if(err) throw err;
						res.json(favourite);				
				}					
			}
									
		}}else{
			favorites.create({'postedBy':req.decoded._doc._id},function(err,favourite){
				if(err)throw err;
				favourite.dishes.push(req.body._id);
				favourite.save(function(err,favourite){
				if(err)throw err;
					res.json(favourite);			
			})
				
})		
		}
)
  })

  .delete(Verify.verifyOrdinaryUser,function(req, res, next){
    	favourites.remove({'postedBy': req.decoded._doc._id},function(err,resp){
		if(err) throw err;
		res.json(resp);	
		
	});
  });



promoRouter.route('/:favouriteId')
  .delete(Verify.verifyOrdinaryUse,function(req, res, next){
    		favourites.find({'postedBy':req.decoded._doc._id}).exec(
		function(err,favourite){
			if(err)throw err;
			for(var i = favourite[0].dishes.length-1;i>=0;i--){
				if(favourite[0].dishes[i]==req.params.dishId)
					favourites.remove(req.params.dishId);			
			}
 favorite.save(function (err, favorite) {
                    if (err) throw err;
                    console.log('Here you go!');
                    res.json(favorite);
});		
		}
		
)
  });
module.exports = favouriteRouter;
