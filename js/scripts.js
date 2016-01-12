$(document).ready(function() {
  $("#blanks form").submit(function(event) {
      var typeInput = $("input#type").val();
      var upper = typeInput.toUpperCase();
      $(".uppercase").text(upper);
      event.preventDefault();
  });
});
