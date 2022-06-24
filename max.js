(function () {
    var url = "https://s1.liutaomax.com/Copywriting/";
    $.getJSON(url,
        function(result){
        $("#Copywriting_name").html(result["name"]);
        $("#Copywriting_value").html(result["value"]);
    });

    $(".project-list a")["click"](
        function() {
            $(".container .is-article")["eq"]($(this)["index"]())["fadeIn"]()["siblings"]()["hide"]();
            $(".project-list a")["eq"]($(this)["index"]())["addClass"]("active")["siblings"]()["removeClass"]("active")
        })

    $("toggle")["click"](function() {
        $(".project-list")["toggleClass"]("show")
    });

    $("#mask")["click"](function (){
        $(".project-list")["toggleClass"]("show")
    })

})(jQuery);

/*var title = [document.title + "的个人页面 | 温馨的个人小站"];
var i=1;
var wo=0;
var ud=1;
function animatetitle() {
    window.document.title=title[0].substr(0, 1)+"";
    if (ud===0) i--;
    if (ud===1) i++;
    if (i===-1) {ud=1;i=0;wo++;wo=wo%2;}
    if (i===title[wo].length+10) {ud=0;i=title[wo].length;}
    parent.window.document.title=title[wo].substr(0, i)+"";
    setTimeout("animatetitle()",100);
}
animatetitle();*/
console.log("\n %c 黑夜的猫max  %c https://www.liutao.love \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;")