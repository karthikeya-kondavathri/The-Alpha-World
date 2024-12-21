(function ($) {
	'use strict';
	// start coding from here common page JS functions

	$('#file-upload').change(function() {
	    var filepath = this.value;
	    var m = filepath.match(/([^\/\\]+)$/);
	    var filename = m[1];
	    $('#filename').html(filename);
	});
		
}.call(window, jQuery));


function restPass() {
    window.location.href = 
        "resetpassword.html";
}


// Navigation

    //  open and close nav 
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });


    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });


    // Click outside the dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });
