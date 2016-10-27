/**
 * Created by yu on 2016/10/27 0027.
 */
//菜谱显示区域切换
$(function () {
    var x = 2;
    var rowsize = 4;
    $("#row3").hide();
    $("#row4").hide();
    $("#morebutton").click(function () {
        x = (x + 1 <= rowsize) ? x + 1 : rowsize;
        var section = "#row" + x;
        $(section).show(600);
        console.log(x);
    });
    $("#lessbutton").click(function () {
        x = (x - 1 < 0) ? 0 : x - 1;
        var section = "#row" + (x + 1);
        $(section).hide(600);
        console.log(x);
    });
});