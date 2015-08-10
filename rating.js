require('./rating.css');

(function($) {
  
	function ratingsTpl(id) {
	 return ('<fieldset class="rating">'+ 
		'<input type="radio" id="'+id+'star5" name="'+id+'rating" value="5" />'+ 
		'<label class = "full" for="'+id+'star5" title="Awesome - 5 stars"></label>'+
		'<input type="radio" id="'+id+'star4half" name="'+id+'rating" value="4.5" />'+ 
		'<label class="half" for="'+id+'star4half" title="Pretty good - 4.5 stars"></label>'+
		'<input type="radio" id="'+id+'star4" name="'+id+'rating" value="4" />'+ 
		'<label class = "full" for="'+id+'star4" title="Pretty good - 4 stars"></label>'+ 
		'<input type="radio" id="'+id+'star3half" name="'+id+'rating" value="3.5" />'+ 
		'<label class="half" for="'+id+'star3half" title="Meh - 3.5 stars"></label> '+ 
		'<input type="radio" id="'+id+'star3" name="'+id+'rating" value="3"/>'+ 
		'<label class = "full" for='+id+'star3" title="Meh - 3 stars"></label>'+ 
		'<input type="radio" id="'+id+'star2half" name="'+id+'rating" value="2.5" />'+ 
		'<label class="half" for="'+id+'star2half" title="Kinda bad - 2.5 stars"></label>'+ 
		'<input type="radio" id="'+id+'star2" name="'+id+'rating" value="2" />'+ 
		'<label class = "full" for="'+id+'star2" title="Kinda bad - 2 stars"></label>'+ 
		'<input type="radio" id="'+id+'star1half" name="'+id+'rating" value="1.5" />'+ 
		'<label class="half" for="'+id+'star1half" title="Meh - 1.5 stars"></label>'+ 
		'<input type="radio" id="'+id+'star1" name="'+id+'rating" value="1" />'+ 
		'<label class = "full" for="'+id+'star1" title="Sucks big time - 1 star"></label>'+ 
		'<input type="radio" id="'+id+'starhalf" name="'+id+'rating" value="0.5" />'+ 
		'<label class="half" for="'+id+'starhalf" title="Sucks big time - 0.5 stars"></label>'+ 
	'</fieldset>');
}

function addListner() {
	var self = this;
	this.$element.find('input').on('click', function(e) {
		if (self.options.readOnly) {
			e.preventDefault();
		} else {
			self.ratings = $(this).val();
			
			if (typeof self.options.onSelect != 'undefined')
			self.options.onSelect(self.ratings);
		}
	});
}

// create the ratings 	
function create() {
	this.$element.html(ratingsTpl(this.options._id));

	if (this.options.readOnly)
	this.$element.find('.rating').addClass('readOnly');	
	else 
	this.$element.find('.rating').addClass('write');	

	addListner.call(this)
}

// constructor function	
function Rating(options) {
	this.options = $.extend(true, {}, this.DEFAULTS, options);

	this.$element = this.options.field;
    create.call(this);
  
   if (options.defaultRating)
   this.set(options.defaultRating);
}

// getter
Rating.prototype.get = function() {
	return this.ratings;
};

// setter
Rating.prototype.set = function(rating) {
	var startFrom = ((5 - rating)*2);

	this.$element.find('input').each(function(i) {
		if (startFrom >= i) {
			$(this).prop('checked', 'true');
		}
	});

	this.ratings = rating;
};

Rating.prototype.DEFAULTS = {
	readOnly: false,
	defaultRating : null,
	_id: ''
}

if (typeof module == 'undefined')
window.Rating = Rating;
else
module.exports = Rating;

})(jQuery);


