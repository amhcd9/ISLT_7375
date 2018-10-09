/*
  ISLT 4375/7375 Mobile Web Application Development
  Final Project (How to Make Colombian Tamales Tutorial)
  Herrera Ana
	javascript and JQuery coding
*/


$(document).ready(function(){

	/* Home Page Button(Start Tutorial) Link to cooking.html file*/
  $("#startBtn").click(function(){
      window.open("cooking.html", "_self");
  });

  $("#quantity").change(function(){
    $("#leafQty").text(1 * $(this).val());
    $("#stringQty").text(2 * $(this).val());
    $("#beefQty").text(2 * $(this).val());
    $("#porkQty").text(2 * $(this).val());
    $("#chickenQty").text(1 * $(this).val());
    $("#porkSkinQty").text(1 * $(this).val());
    $("#carrotQty").text(0.25 * $(this).val());
    $("#potatoesQty").text(0.25 * $(this).val());
    $("#eggQty").text(0.25 * $(this).val());
    $("#riceQty").text(1 * $(this).val());
    $("#peaQty").text(0.75 * $(this).val());
    $("#flourQty").text(0.5 * $(this).val());
    $("#yOnionQty").text(0.125 * $(this).val());
    $("#gOnionQty").text(1 * $(this).val());
    $("#garlicQty").text(1.25 * $(this).val());
    $("#tomatoQty").text(0.75 * $(this).val());
    $("#oilQty").text(0.25 * $(this).val());
    $("#cuminQty").text(0.5 * $(this).val());
    $("#flavorQty").text(0.5 * $(this).val());
    $("#saltQty").text(0.75 * $(this).val());
    $("#pepperQty").text(0.5 * $(this).val());
    $("#oreganoQty").text(0.25 * $(this).val());
    $("#laurelQty").text(0.25 * $(this).val());
    $("#thymeQty").text(0.25 * $(this).val());
  });

  /* feedback form -- show/hide next question after cover when user turn it NO */
  $("[name='cover']").click(function(){
    $("#missedDiv").toggle();
  });

  /* feedback form -- show/hide next question after cooked when user turn it YES */
  $("#cooked").change(function(){
    $("#overallRecipeDiv").toggle();
  });
});
