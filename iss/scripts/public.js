$(document).ready(function()
{
  $('#load-more-content').click(function()
  {
    
    $('#more-content').toggleClass('shown');

    $('#load-more-content').hide();

    if( $('#more-content').hasClass('shown') )
    {
      $('#load-more-content').text('Hide Live Stream');
      $('#more-content').fadeIn('slow', function()
      {
        $('#load-more-content').fadeIn('slow');
      });
    }
    else
    {
      $('#load-more-content').text('Load Live Stream');
      $('#more-content').fadeOut('slow', function()
      {
        $('#load-more-content').fadeIn('slow');
      });
    }
  });
});