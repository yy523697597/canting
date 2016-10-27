/**
 * Created by yu on 2016/10/27 0027.
 */
<!--当输入框达到maxlength后下一个输入框获取焦点-->
$(function () {
    function tabForward(event) {
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);

        if (target.value.length == target.maxLength) {
            var form = target.form;

            for (var i = 0, len = form.elements.length; i < len; i++) {
                if (form.elements[i] == target) {
                    if (form.elements[i + 1]) {
                        form.elements[i + 1].focus();
                    }
                    return;
                }
            }

        }
    }

    var phone1 = document.getElementById("phone1");
    var phone2 = document.getElementById("phone2");
    var phone3 = document.getElementById("phone3");

    EventUtil.addHandler(phone1, "keyup", tabForward);
    EventUtil.addHandler(phone2, "keyup", tabForward);
    EventUtil.addHandler(phone3, "keyup", tabForward);
});
//表单验证
$(function () {
    $("#form1").validate({
        rules:{
            phone:{
                required:true,
                number:true
            },
            email:{
                required:true,
                email:true
            },
            rextarea:{
                required:true
            }
        }
    });
});
//ajax方式表单提交
$(function () {
    $("#form1").ajaxForm(function () {
        $("#output1").show(600);
    })
})