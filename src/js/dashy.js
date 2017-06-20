function showMail(obj) {
	var mail = "federico.rossi15s95@gmail.com"
	$(obj).html(mail);
	$(obj).attr("href","mailto:"+mail);
}
var threshold = $('.dashy-topbar').height();
var addPad = $('.dashy-topbar').outerHeight();
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > threshold) {
        $('.dashy-topbar').addClass('fixed');
        $('body').css({'padding-top':addPad+"px"})
    } else {
        $('.dashy-topbar').removeClass('fixed');
        $('body').css({'padding-top':0})        
    }
});


function toTop() {
	$(window).scrollTop(0);
}