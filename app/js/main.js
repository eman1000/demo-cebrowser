$("#search-input-top").click(function(ev){
  ev.stopPropagation();
  $("#search-input-top").addClass("input-with-result-history");
  $("#search-result-history-top").addClass("show");
});

$("#search-input").click(function(ev){
  ev.stopPropagation();
  $("#search-input").addClass("input-with-result-history");
  $("#search-result-history").addClass("show");
});


$("body").click(function(){
  $("#search-result-history-top").removeClass("show");
  $("#search-result-history-top").addClass("hide");
  $("#search-result-history").removeClass("show");
  $("#search-result-history").addClass("hide");
  $("#search-input-top").removeClass("input-with-result-history");
  $("#search-input").removeClass("input-with-result-history");

});