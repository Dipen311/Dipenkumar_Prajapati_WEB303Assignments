// WEB303 Assignment 2
$(document).ready(function(){
    $("#prospect").click(function(){
        $("#content").css("height","400");
        $('div#content').load("prospect.html").hide().slideDown(3000);
    });
    $("#convert").click(function(){
        $("#content").css("height","400");
        $('div#content').load("convert.html").hide().slideDown(3000);
    });
    $("#retain").click(function(){
        $("#content").css("height","400");
        $('div#content').load("retain.html").hide().slideDown(3000);
    });
});