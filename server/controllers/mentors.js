var Mentor= require('../models/mentor').mentor;
var Mentee=require('../models/mentor').mentee;
var Rating = require('../models/mentor').rating;

module.exports={
    
    AllMentors : function(req, res){
        Mentor.find({}, function (err, mentors){
            if(err){
                res.json({message: "Could not be found", data:mentors})
            }
            else{
                res.json({message:"Success", data: mentors})
            }
        })
    },
    NewMentor : function(req, res){
        var newMentor = new Mentor({name : req.body.name, url : req.body.url, ratings : [], description : req.body.description,skill : []})
        newMentor.save(function(err){
            if (err){
                res.json({message:"Could not be found", data:newMentor})
            }
            else{
                res.json({message : "Success", data : newMentor})
            }
        })
    },

    NewRating: function(req, res){
        Mentor.findById({ _id: req.params.id }, function (err, mentor) {
            if (err) {
                res.json({message: "Could not be found", data: newRating})
            } else {

                mentor.ratings.push(req.body);
                var sum = 0;
                for (var i = 0; i < mentor.ratings.length; i++){
                    sum = sum + mentor.ratings[i].stars;
                }
                mentor.avgRating = sum/mentor.ratings.length;
                mentor.save(function(err) {
                    if (!err) {
                        res.json({message: 'Success', data: mentor});
                    } else {
                        res.json({errorMsg: "Cannot create mentor", mentor: err})
                    }
                });
            }
        })
    },
    findMentor: function(req, res){
        Mentor.findOne({ _id: req.params.id }, function (err, mentor) {
            if (err) {
                console.log(err);
                res.json({ message: "could not be found", data:mentor });
            } else {
                res.json({message:"Found", data:mentor});
            }
        })


    },
    updateMentor: function (req,res){
        console.log("Update DATA", req.body);

        Mentor.findByIdAndUpdate(req.params.id,req.body, function(err,mentors){
            console.log("mentors to edit",mentors);
            if(err){
                res.json({message:"Could not be found", data:mentors})
            } else {

                res.json({message:"Found", data:mentors})
            }
        })

    },
    destroy: function (req, res) {
        Mentor.remove({_id: req.params.id}, function (err, mentors) {
            console.log("delete one mentor", mentors);
            if (err) {
                res.json({message: "Could not be found", data: mentors})
            } else {

                res.json({message: "Found", data: mentors})
            }


        })
    },
    destroyRating: function (req, res) {
        Rating.remove({_id: req.params.id}, function (err, ratings) {
            console.log("one rating to delte", ratings);
            if (err) {
                res.json({message: "Could not be found", data: ratings})
            } else {

                res.json({message: "Found", data: ratings})
            }


        })
    },
}