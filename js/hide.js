$(document).ready(function(){



	
$(".header-menu").click(function(){
		if($(".header-menu .container > ul").css('display') == "none"){
			$(".header-menu .container > ul").show();
		} else {
			$(".header-menu .container > ul").hide();
		}
		
	});
});