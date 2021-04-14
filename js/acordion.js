$(function() {
    $("#accordion").accordion({
      animate: 400,
      active: 0,
      collapsible: true
    });
});

var collapseAll = function(){
  $("#accordion").accordion("option", "active", false);
}