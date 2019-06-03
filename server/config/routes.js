var mentors = require('../controllers/mentors');
var path = require('path');

module.exports = function(app) {
   
    app.get('/allmentors', function (req, res) {
        mentors.AllMentors(req,res);
    });
    app.post('/newmentor', function (req, res) {
        console.log("new mentor");
        mentors.NewMentors(req,res);
    });
    app.post('/newRating/:id', function (req, res) {
        console.log("ratings",req.params.id);
        mentors.NewRating(req,res);
    });
    app.put('/mentor/update/:id', function (req, res) {
        console.log("routes",req.params.id);
        mentors.updateMentor(req,res);
    });
    app.get('/onementor/:id', function (req, res) {
        console.log("routes",req.params.id);
        mentors.findMentor(req,res);
    });
    app.delete('/mentor/delete/:id', function (req, res) {
        mentors.destroy(req,res);
    });
    app.delete('/delete/rating/:id', function (req, res) {
        mentors.destroyRating(req,res);
    });
    //if cannot find these routes, it will use app.routing-module.ts
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });

}
