var mentors = require('../controllers/mentors');

module.exports = function(app) {
   
    app.get('/allmentors', function (req, res) {
        mentors.AllMentors(req,res);
    });
    app.post('/newmentor', function (req, res) {
        mentors.NewMentor(req,res);
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
    app.delete('/deletementor/:id', function (req, res) {
        mentors.destroy(req,res);
    });
    app.delete('/delete/rating/:id', function (req, res) {
        mentors.destroyRating(req,res);
    });


}
