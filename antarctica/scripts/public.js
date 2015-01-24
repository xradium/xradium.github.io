$(document).ready(function()
{
  var initial = $('blockquote.invisible').length; 
  initial++;
  $('.button').click(function()
  {
	var blockId = $(this).attr('id');
	if ($('.cam-' + blockId).hasClass('invisible')) {
         $('blockquote, .ext').addClass('invisible');
	   $('.cam-' + blockId).removeClass('invisible');
	} else {
	   $('.cam-' + blockId).addClass('invisible');
	}
	if ($('blockquote.invisible').length == initial) { 
	   $('.ext').removeClass('invisible');
	}
  });
});