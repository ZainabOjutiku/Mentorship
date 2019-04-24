var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var RatingSchema = new mongoose.Schema({
    stars: Number,
    reviews : String,
    name: String
},{timestamps: true})
var MenteeSchema = new mongoose.Schema({
    name: {type: String, required:[true, "name is required"], minLength:3},
    description: {type: String, required:[true, "description is required"], minLength:3},
})
var MentorSchema = new mongoose.Schema({
    name: {type: String, required:[true, "name is required"], minLength:3},
    description: {type: String, required:[true, "description is required"], minLength:3},
    url : String,
    avgRating : Number,
    skills:[String],
    ratings: [RatingSchema],
}, {timestamps: true})


mongoose.model('Mentor', MentorSchema),
mongoose.model('Mentee', MenteeSchema),
mongoose.model('Rating', RatingSchema);


module.exports = {
    mentor: mongoose.model('Mentor'),
    mentee: mongoose.model('Mentee'),
    rating: mongoose.model('Rating')};
