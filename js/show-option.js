// Use iife
(function ()
{
  // get the form
  var form = document.getElementById("how-heard");
  // Get the radio buttons
  var options = form.elements.heard;
  // Other radio button
  var other = document.getElementById("other");
  // Other text input
  otherText = document.getElementById("other-text");
  // Hide other text input
  otherText.className =  "hide";

  // Loop through radios
  for (var i = 0; i < options.length; i++)
  {
    // Add event listener
    addEvent(options[i], "click", radioChanged);
  }

  // Used to check for radio change
  function radioChanged()
  {
    // is other checked?
    // If checked, assign bank string to other input. Otherwise, hide text input
    hide = other.checked ? "" : "hide";
    // Text input visibility
    otherText.className = hide;
    // IF text input hidden, empty its contents
    if (hide)
    {
      otherText.value = "";
    }
  }
}());
