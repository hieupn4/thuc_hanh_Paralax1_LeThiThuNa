
$(document).ready(function() {
	$(window).bind("scroll", function() {
		parallax();
	});
});
function parallax() 
{
 
    
   var positionBar = $(window).scrollTop(); // hàm scrollTop này là của Jquery
    var background1 = document.getElementsByClassName('first');
    var content1 = document.getElementsByClassName("move");
    $(background1).css("top",(0 - (positionBar * 0.1)) + 'px');
  //  $(".first").css("top",(0 - (positionBar * 0.1)) + 'px'); viết như này cũng được
    $(content1).css("top",(300-(positionBar * 0.1)) + 'px');
    $(content1).css("left",(250-(positionBar * 0.2)) + 'px');
    $(background1).css("opacity",(100/positionBar));
    var background2 = document.getElementsByClassName("second");
    if(positionBar<=1000)
    $(background2).css("opacity",(positionBar/1000));
    else
    $(background2).css("opacity",(900/positionBar));
    var content2 = document.getElementsByClassName("content2");
    $(content2).css("top",(600-(positionBar * 0.2)) + 'px');
    $(content2).css("left",(30+(positionBar * 0.2)) + 'px');
    // nếu không muốn xài biến trung gian thì dùng thẳng luôn đối tượng cũng được theo cú pháp như sau
    $(".img-cont").css("top",(800-(positionBar * 0.8))+ 'px');
    // như vậy là ta có 2 cách để lấy đối tượng sử dụng jquery
    //bây giờ ta sẽ làm với thằng ảnh nền của steve job 
    var background3 = document.getElementsByClassName("third");
    var content3 = document.getElementsByClassName("content3");
    $(background3).css("opacity",(positionBar/1500));
    $(content3).css("top",(800-(positionBar * 0.3)) + 'px');
    $(content3).css("left",(30+(positionBar * 0.1)) + 'px');
    $(".img-cont3").css("top",(800-(positionBar * 0.3))+ 'px');
    }
    