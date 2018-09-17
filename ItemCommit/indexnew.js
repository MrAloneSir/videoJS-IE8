function moveL(obj){
    var active=$(obj).prev().prev().find("li.active");
    var index=active.index();
    var len=$(obj).prev().prev().find("li").length;
    if(index==0){
       $(obj).prev().prev().find("li:last").addClass("active").siblings().removeClass("active");
       index=len;
    }
    active.prev().addClass("active").siblings().removeClass("active");
    $($(obj).prev().children()[index-1]).fadeIn('2500').siblings().hide();
}
function moveR(obj){
    var active=$(obj).prev().prev().prev().find("li.active");
    var index=active.index();
    var len=$(obj).prev().prev().prev().find("li").length;
    if(index==(len-1)){
       index=0;
       $(obj).prev().prev().prev().find("li").eq(0).addClass("active").siblings().removeClass("active");
       $($(obj).prev().prev().children()[index]).fadeIn('2500').siblings().hide();
       
    }else{
    	 active.next().addClass("active").siblings().removeClass("active");
         $($(obj).prev().prev().children()[index+1]).fadeIn('2500').siblings().hide();
    }
}
//随机取数组中的元素
function randomNum(arr){
   return arr[Math.floor(Math.random()*arr.length)];
}
$(function () {
    //vip在线小班
    $(".vipline-classtype").on('click','li',function(){
        var index=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $($(".vipline-bottom").find(".vipline-b-list")[index]).show().siblings().hide();
    })
    $(".mingshiteam-b-teacher").on('click','li',function(){
        var index=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $($(".mingshiteam-b-intro").find(".mingshiteam-intro-list")[index]).fadeIn('2500').siblings().hide();
    })
    //vip在线1v1
    $(".wechatnum").html('微信：'+randomNum(['guixue00','guixue01','guixue07','guixue10']))
    $(".vipcourse-list").find("li").hover(function(){
        index=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        // $(this).find(".wechatnum").html('微信微信：'+randomNum(['guixue00','guixue01','guixue07','guixue10']));
    },function(){
      
  })
   //学为贵真经名师团
    var len=$(".mingshiteam-b-teacher").find("li").length;
    var w=$(".mingshiteam-b-teacher").find("li").eq(0).width();
    $(".mingshiteam-b-teacher").width(len*w);
    //placeholder兼容
    //$('input, textarea').placeholder();
})        