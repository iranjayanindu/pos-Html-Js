// $('#linkHome').click(
//
//     function(){
//
// });

/*function(){
    $('#linkHome').css("display","none");
    $('#linkCustomer').css("display",none);
    $('#linkitem').css("display",none);
    $('#linkorder').css("display",none);

}*/

// function hideAll() {
//     $('#home').css("display", "none");
//     $('#customer').css("display", none);
//     $('#item').css("display", none);
//     $('#putch').css("display", none);
// }
//
// hideAll();

function hidecontent(){
    $('#home').css("display","none");
    $('#customer').css("display","none");
    $('#item').css("display","none");
    $('#putch').css("display","none");

}
function hidecontent1(){
    $('#home').css("display","unset");
    $('#customer').css("display","none");
    $('#item').css("display","none");
    $('#putch').css("display","none");

}
hidecontent1();

$('#linkHome').click(function () {
    hidecontent();
    $('#home').css("display","unset");
    $('#customer').css("display","none");
    $('#item').css("display","none");
    $('#putch').css("display","none");
});
$('#linkCustomer').click(function () {
    hidecontent();
    $('#home').css("display","none");
    $('#customer').css("display","unset");
    $('#item').css("display","none");
    $('#putch').css("display","none");
});
$('#linkitem').click(function () {
    hidecontent();
    $('#home').css("display","none");
    $('#customer').css("display","none");
    $('#item').css("display","unset");
    $('#putch').css("display","none");
});
$('#linkorder').click(function(){
    hidecontent();
    $('#home').css("display","none");
    $('#customer').css("display","none");
    $('#item').css("display","none");
    $('#putch').css("display","unset");
});