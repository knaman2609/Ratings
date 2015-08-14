var chai;
var sinon;
var sinonChai;
var expect;

var $;
var Rating;
var jsdom;

// for running from terminal
if (typeof exports === 'object') {
  sinon = require("sinon");
  sinonChai = require("sinon-chai");
  chai = require('chai');
  expect = chai.expect;
  chai.use(sinonChai);

  jsdom = require('jsdom').jsdom;
  global.window = jsdom().parentWindow;
  global.jQuery = global.$ = require('jquery')(window);
  Rating = require('../rating.js');
  $ = require('jquery')();
} else {
  expect = chai.expect;
  Rating = window.Rating;
  $ = window.jQuery;
}

describe('Rating', function() {
  describe('constructor', function() {
    it('should be an objec;t', function() {
      var rating = new Rating();
      expect(rating).to.be.a('object');
    });

    it('should have 10 input and 10 field labels', function() {
      var rating = new Rating();
      var inputLen = rating.$element.find('input').length;
      var labelLen = rating.$element.find('label').length;

      expect(inputLen).to.equal(10);
      expect(labelLen).to.equal(10);
    });
  });

  describe('options and api', function() {
    it('should have readOnly class for readOnly option', function() {
      var rating = new Rating({
        readOnly: true,
      });

      var bool = rating.$element.find('.rating').hasClass('readOnly');

      expect(bool).to.equal(true);
    });

    it('should return a  number for get method', function() {
      var rating = new Rating({
        defaultRating: 3,
      });

      expect(rating.get()).to.be.a('number');
    });

    it('should set the ratings to a given value', function() {
      var rating = new Rating({
        defaultRating: 3,
      });

      rating.set(2);
      expect(rating.get()).to.equal(2);
    });
  });

  // sinon js use
  describe('onSelect method test', function() {
    it("should call the onSelect function and return ratings on click", function() {
      var cb = sinon.spy();
      var opt = {
        defaultRating: 3,
        onSelect: cb,
      };

      var rating = new Rating(opt);
      rating.$element.find('input:nth-child(1)').trigger('click');

      expect(cb).to.have.been.calledWith("5");
    });
  });
});







