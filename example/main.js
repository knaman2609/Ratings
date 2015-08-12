var  Rating = require('rating-gen');
var $ = require('jquery');

var rating = new Rating({
    field: $('.rating-container'),
    defaultRating: 3
});