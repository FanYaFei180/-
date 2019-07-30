$(function () {
	//左侧
	$(".sec-mainNav>li").on("mouseenter",function () {
		$(this).children(".menu-panel").show();
        $(this).addClass("hover");
    });
    $(".sec-mainNav>li").on("mouseleave",function () {
        $(this).children(".menu-panel").hide();
        $(this).removeClass("hover");
    });
    //右侧
	$(".login").hover(function () {
        $(".search-all").css("overflow","visible");
		$(".search-all").stop().animate({"height":"150px","opacity":"1"},500);
    },function () {
        $(".search-all").stop().animate({"height":"00px","opacity":"0"},500);
    });
	$(".search-all>a").on("click",function () {
		 $(this).css("z-index","2");
		$(this).find(".btm").toggle("slow");
        $(this).siblings().find(".btm").hide();
    });

    //轮播
//     var li_len=$(".focus").innerWidth();
//     var page=0;
//     console.log(li_len);
//     var num=4;
// //图片切换
//     function ani() {
//         $(".silde").animate({
//             left:-li_len
//         },500,function () {
//             $(".silde").css("left",0);
//             $(".silde li").slice(0,1).appendTo(".silde");
//         })
//     }
// //底部文字切换
//     function literal(digit){
//         $(".silde-page li").eq(digit).addClass("on").siblings().removeClass("on");
//     }
// //计时器
//     setInterval(function () {
//         page++;
//         if (page>num-1){
//             page=0;
//         }
//         ani();
//         literal(page);
//     },1500);
    var ul = $('.silde'),
        liw = $('.silde li').first().innerWidth(),
        lit = $('.silde-page li'),
        len = $('.silde li').length,
        timer = null;
    index = 0;
// 复制两个副本
    $('.silde li').first().clone(true).appendTo(ul);
    $('.silde li').eq(-2).clone(true).prependTo(ul);
//  自动轮播
    function autoplay() {
        timer = setInterval(function () {
            index++;
            if (index > 4) {
                ul.css('left', -liw)
                index = 1
            }
            Style(index)
            manimate(index)
        }, 2000)
    }
//  控制小圆点切换
    function Style(i) {
        index=i;
        if (i < 0) {
            i = 4
        } else if (i > 3) {
            i = 0
        }
        $('.silde-page li').eq(i).addClass('on').siblings().removeClass('on');
    }
//   控制动画
    function manimate(i) {
        i += 1;
        // console.log(i)
        ul.stop().animate({
            left: -i * liw
        }, 1000)
    }
    autoplay();
//   鼠标移入li
    $('.silde-page li').mouseenter(function () {
        var   index=$(this).index();
        Style(index);
        ul.animate({
            'left': -(index + 1) * liw
        });
    });
//  鼠标移入 大盒子
    $('.focus').hover(function () {
        clearInterval(timer);
    }, function () {
        autoplay();
    });

//滚动条
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $(".ad").hide();
            $(".rightMenu").animate({"bottom":"50px"},300);
        }else{
            $(".ad").show();
            $(".rightMenu").stop(true,true).css("bottom","-150px");
        }
    });
    $(".menu-edu").hover(function () {
        $(this).parent().next().show();
    },function () {
        $(this).parent().next().hide();
    });
    $(".menu-wx").hover(function () {
        $(this).parent().siblings(".edu-wx-img").show();
    },function () {
        $(this).parent().siblings(".edu-wx-img").hide();
    });

    //当前滚动的地方的窗口顶端到整个页面顶端的距离：
        var winPos = $(window).scrollTop();
    //获取指定元素的页面位置：
       // $(".rightMenu").offset().top;
    //对页面滚动条滚动的监听：要放在页面加载的时候
    //$(window).scroll(function(event){});
    //设置滚动条到指定位置。
    //$(window).scrollTop(offset)
        /*$(".backTop").click(function(){
            var timer=null;
            if (timer==null) {//同一时间只能有一个计时器
                timer = setInterval(function(){
                    //每次上升100
                    console.log(winPos);
                    console.log(1);
                    $(window).scrollTop(winPos);
                    winPos-=10;
                    if($(window).scrollTop()=== 0){//如果滚动条为零，清除计时器，隐藏div
                        clearInterval(timer);
                    }
                }, 500);
            }
        });*/
    //返回顶部
    $(".backTop").click(function(){
        $("html,body").animate({"scrollTop":"0"},1000);
    });
});