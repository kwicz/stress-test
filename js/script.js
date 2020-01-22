$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=stressor]:checked").each(function(){
      var negFactors = $(this).val();
      $('#stressed').removeClass("hidden");
      $('#stressed').append(negFactors + "<br>");
    });
    $('#stress_survey').hide();
  });
});