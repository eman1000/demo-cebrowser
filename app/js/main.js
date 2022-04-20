$("#search-input-top").click(function(ev){
  ev.stopPropagation();
  $("#search-input-top").addClass("input-with-result-history");
  $("#search-result-history-top").addClass("show_");
});

$("#search-input").click(function(ev){
  ev.stopPropagation();
  $("#search-input").addClass("input-with-result-history");
  $("#search-result-history").addClass("show_");
});


$("body").click(function(){
  $("#search-result-history-top").removeClass("show_");
  $("#search-result-history-top").addClass("hide_");
  $("#search-result-history").removeClass("show_");
  $("#search-result-history").addClass("hide_");
  $("#search-input-top").removeClass("input-with-result-history");
  $("#search-input").removeClass("input-with-result-history");

});

$('#apps-modal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$(".scroll-arrow").click(()=>{
  $("#suggestions").scrollLeft(0);
})

