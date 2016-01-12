$(document).ready(function() {
  $("#blanks form").submit(function(event) {
      var typeInput = $("input#type").val();
      $(".uppercase").text(typeInput);
      event.preventDefault();
  });
});
