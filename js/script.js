$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    var check = $("input:checkbox[name=stressor]:checked").val();
    if (check) {
      $("input:checkbox[name=stressor]:checked").each(function(){
        var negFactors = $(this).val();
        $('#stressed').show();
        $('#stressed').append(negFactors + "<br>");
      });
    } else {
      $('#not-stressed').show();
    }
    $('#stress_survey').hide();
  });
});
