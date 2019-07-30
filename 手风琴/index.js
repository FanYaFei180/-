function accordion(id,option) {
    var p=document.getElementById(id);
    //默认配置
    var defaultOption={
        active_width:400,
        active_height:350,
        small_width:150,
        small_height:100,
        time:300
    };

//合并配置
    var combine= Object.assign({},defaultOption,user_option);
    console.log(combine);
    //判断
    if (combine.col*combine.row!==p.children.length) {
        throw"combine.col*combine.row!="+p.children.length;
    }


    //父亲的宽度
    p.style.width=combine.active_width+combine.small_width*(combine.col-1)+"px";

    var time1=new Date().getTime();
    var timer=null;


    //下标===》坐标
    //坐标===》下标
    function activepic(index) {
        clearTimeout(timer);
    var time2=new Date().getTime();
        if (time2-time1<combine.time) {
            timer=setTimeout(function () {
                activepic(index);
            },combine.time);
            return false;
        }
        time1=time2;



        var cx = index % option.col;
        var cy = Math.floor(index / option.col);
        console.log(cx,cy);



        for (var x=0;x<combine.col;x++) {
            for (var y=0;y<combine.row;y++) {
                var subscript=x+y*combine.col;
                // console.log(subscript);
                if (x===cx && y===cy) {
                    console.log("oajwd");
                    p.children[subscript].style.width=combine.active_width+"px";
                    p.children[subscript].style.height=combine.active_height+"px";
                }else if (x===cx) {
                    p.children[subscript].style.width=combine.active_width+"px";
                    p.children[subscript].style.height=combine.small_height+"px";
                }else if (y===cy) {
                    p.children[subscript].style.height=combine.active_height+"px";
                    p.children[subscript].style.width=combine.small_width+"px";
                }else{
                    p.children[subscript].style.width=combine.small_width+"px";
                    p.children[subscript].style.height=combine.small_height+"px";
                }
            }
        }
    }

    activepic(0);
    for (var i=0;i<p.children.length;i++) {
        p.children[i].ind=i;
        p.children[i].style.transition="all" +combine.time/1000+"s";
        p.children[i].onmouseenter=function () {
            activepic(this.ind);
        }
    }


}