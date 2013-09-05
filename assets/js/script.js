
$(document).foundation();

	


$(document).ready(function() {
   $(".has-children").addClass("has-dropdown");
   $(".has-children ul").addClass("dropdown");
   $('.fancybox').fancybox();
		
	$( "p.title" ).click(function() {
		if ($(this).parent().hasClass("active")) {
			$(this).parent().removeClass("active");
			return false; // Prevents further propagation of event
		}
	});
});