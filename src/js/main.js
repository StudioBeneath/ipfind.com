// Intialize Tab
var tab = new Tab();
// Initialize Accordion
var accordion = new Accordion();
// Initialize Dropdown
var dropdown = new Dropdown();
// Initialize Notice
var notice = new Notice();
// Initialize Slidemenu
var slidemenu = new Slidemenu();

$( document ).ready(function() {
  console.log("document is ready");

  $('.js-trigger-ruby').on( "click", function() {
    $('.js-home-language-switch').removeClass('is-active');
    $(this).toggleClass('is-active');

    $('.js-snippet').hide();
    $('.js-snippet-ruby').fadeIn('fast');
  });

  $('.js-trigger-php').on( "click", function() {
    $('.js-home-language-switch').removeClass('is-active');
    $(this).toggleClass('is-active');

    $('.js-snippet').hide();
    $('.js-snippet-php').fadeIn('fast');
  });

  $('.js-trigger-js').on( "click", function() {
    $('.js-home-language-switch').removeClass('is-active');
    $(this).toggleClass('is-active');

    $('.js-snippet').hide();
    $('.js-snippet-js').fadeIn('fast');
  });

  $('.js-trigger-cs').on( "click", function() {
    $('.js-home-language-switch').removeClass('is-active');
    $(this).toggleClass('is-active');

    $('.js-snippet').hide();
    $('.js-snippet-cs').fadeIn('fast');
  });

  $('.js-trigger-python').on( "click", function() {
    $('.js-home-language-switch').removeClass('is-active');
    $(this).toggleClass('is-active');

    $('.js-snippet').hide();
    $('.js-snippet-python').fadeIn('fast');
  });


});
