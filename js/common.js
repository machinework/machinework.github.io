$(function(){
	var href = location.href,
		nav = $(".nav"),
		mainNavLi = nav.find("li"),
		mainNavA = nav.find("a"),
		mainNavS = nav.find("span"),
		navDown = false,
		navNum = 0;
		
	mainNavA.each(function(index){
		if(href.indexOf($(this).attr("href")) != -1) {
			navNum = index;
		}	
	});
	mainNavS.css({left:mainNavLi.eq(navNum).position().left});	
	mainNavLi.hover(function(){
		var index = $(this).index();
		navMove(index);
		return false;
	},function(){
		navMove(navNum);
		return false;
	});
	
	function navMove(num) {
		var n = mainNavLi.eq(num);
		mainNavS.stop(true).animate({left:n.position().left}, 300);
	}
	
});