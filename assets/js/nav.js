$(function(){
    $(".nav-alt ul li").hover(function(){
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
    }, function(){
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
    });
    //$(".nav-alt ul li:has(ul)").find("a:first").append(" &raquo; ");

	$(".nav-alt.vert").each(function (i) {
		var moo = $(this).find("ul:first").width() + "px";
		$(this).find("ul ul").css({left:moo});
		console.log("moo", moo);
	});
});


