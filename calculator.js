$(document).ready(function() {
 
  var modelSpecs,
	modelPrice,
	modelSpecsHolder,
	modelPriceHolder;
	
	modelSpecsHolder = $("modelSpecs");
	modelPriceHolder = $("#modelPrice");
	modelPriceHolderUSD = $("#modelPriceUSD");
	
	modelPrice = 0;
	modelPriceUSD = 0;
	modelSpecs = "";


	function calculatePrice(){
		var modelPriceEngine = $("input[name=engine]:checked", "#autoForm").val();
		var modelPriceTransmission = $("input[name=transmission]:checked", "#autoForm").val();
		var modelPricePackage = $("input[name=package]:checked", "#autoForm").val();
		modelPriceEngine = parseInt(modelPriceEngine);
		modelPriceTransmission = parseInt(modelPriceTransmission);
		modelPricePackage = parseInt(modelPricePackage);
		
		modelPrice = modelPriceEngine + modelPriceTransmission + modelPricePackage;
		modelPriceUSD = modelPrice/80;
		
	    //alert(modelPrice);
		modelPriceHolder = (modelPrice + " рублей");
		$("#modelPrice").text(modelPriceHolder);
		modelPriceHolderUSD = (modelPriceUSD + " долларов");
		$("#modelPriceUSD").text(modelPriceHolderUSD);
	


};

$(".order").click(function(){
	 calculatePrice();
 });
}); 	


$(function() { 
$("#color-blue").click(function(){
  $(".slider-color").css( "background-color", "#0000FF" );
  
});
});

$(function() { 
$("#color-gray").click(function(){
    $(".slider-color").css( "background-color", "#A9A9A9" );
});
});

$(function() { 
$("#color-red").click(function(){
    $(".slider-color").css( "background-color", "#FF0000" );
});
});

$(function() { 
$("#color-black").click(function(){
    $(".slider-color").css( "background-color", "#000000" );
});
});

$(function() { 
$("#color-white").click(function(){
    $(".slider-color").css( "background-color", "#FFFFFF" );
});
});

$(function() { 
$("#color-orange").click(function(){
    $(".slider-color").css( "background-color", "#FF4500" );
});
});

$(function() { 
$("#color-gray2").click(function(){
    $(".slider-color").css( "background-color", "#696969" );
});
 });
  
 
