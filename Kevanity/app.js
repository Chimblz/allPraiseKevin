var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);

$("#imageGallery a").click(function(event){
	event.preventDefault();
	console.log('successful click event');
	var imageLocation = $(this).attr("href");
	console.log('successful var imageLocation');
 
	$image.attr("src", imageLocation);
  	
	var captionText = $(this).children("img").attr("title");
	$caption.text(captionText);

	$overlay.show();
});	
	
$overlay.click(function(){
  $overlay.hide();
});