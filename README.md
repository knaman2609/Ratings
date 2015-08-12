# Ratings

![Alt text](rating.png "Ratings")

#### INSTALL
    npm install rating-gen

This will install jquery 2.1.4 as a dependency

Copy the css from `node_modules/rating-gen/rating.css` in you html  and adjust the fieldset font-size to change the size of stars.
The css file imports `font-awesome` , so replace the path with your local copy.

#### Usage
    var  Rating = require('rating-gen');
    var $ = require('jquery');

    var rating = new Rating({
        field: $('.rating-container'),
        defaultRating: 3,
        onSelect: function(rating) {
            alert(rating);
        }
    });

#### Options

- readOnly: true, no hover effect and change in the ratings
- rating.get() - gives the current rating
- rating.set(2) - will set the ratings