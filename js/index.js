$('.Listing-Link').click(function() {
  $(this).addClass('Selected');
  $(this).clone().contents().appendTo('.Active-Filters').wrap('<button class="Button"></button>');
  //clone the contents of selected link and add a button with those contents to active filters div

  var $selected = $('.Listing-Link.Selected');
  
  $('.Active-Filters .Button').click(function() {
    var $buttonText = $(this).text();

    $selected.each(function() { //scan through each selected listing link
      var $selectedText = $(this).text();
      
      if ($buttonText == $selectedText) { //if the text matches the text of the button that was clicked
        $(this).removeClass('Selected'); //remove the Selected class
      }
    });

    $(this).remove(); //remove the clicked button
  });

});