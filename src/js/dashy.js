var Dashy ={
};

function showMail(obj) {
	var mail = "federico.rossi15s95@gmail.com"
	$(obj).html(mail);
	$(obj).attr("href","mailto:"+mail);
}

function init() {
    Dashy.permittedLocations = ["about","projects","contacts"];
    Dashy.topBarInnerHeight = $('.dashy-topbar').height();
    Dashy.topBarOuterHeight = $('.dashy-topbar').outerHeight();
    Dashy.responsiveTriggerWidth = 768;
    $("#top").animate({'padding-top':Dashy.topBarOuterHeight+"px"},250,'swing',function() {
        var hashLocation = ($.inArray(window.location.hash,Dashy.permittedLocations)>-1)? window.location.hash:'about';
        scrollTo($("a[href$='"+hashLocation+"']"),true);
    });
    $("body").scrollspy({
        target:"#topbar",
        offset:Dashy.topBarOuterHeight
    })
    $("#topbar li").on("activate.bs.scrollspy",function(el) {
    	scrollTo(el.target.firstChild);
        highlightCurrentAnchor(el.target.firstChild);
    });
}

function highlightCurrentAnchor(sectionAnchor) {
    if(Dashy.lastVisitedAnchor) {
        $(Dashy.lastVisitedAnchor).parent().removeClass("dashy-active");
        $(Dashy.lastVisitedAnchor).parent().removeClass("active");
    }
    $(sectionAnchor).parent().addClass("dashy-active");
    Dashy.lastVisitedAnchor = sectionAnchor;    
}

function scrollTo(sectionAnchor,forced) {
    var sectionId = $(sectionAnchor).attr("href");
    var section = $(sectionId);
    var sectionTop = Math.round(section.position().top);
    var sectionTopOffset = sectionTop - Dashy.topBarInnerHeight;
    $("body").animate({'scrollTop':sectionTopOffset},500,'swing',function() {
        if(!forced && $(window).width() < Dashy.responsiveTriggerWidth)
            $("#dashy-topbar-toggle").click();
    });
    highlightCurrentAnchor(sectionAnchor);
}

function scrollToTop() {
    $("body").animate({'scrollTop':0},250,'swing');
}