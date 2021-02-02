$(function () {
    // 送信
    $('form').submit(function () {
        var sub_type = $('input:radio[name="sub_type"]:checked').val();
        var from = $('input:radio[name="from_p"]:checked').val();
        var camp = $('input[name="camp_name"]').val();
        var par = $('input[name="par_name"]').val();
        var tele = $('input[name="tele"]').val();
        // var textbox = $('textarea[name="textbox"]').val();
        var subtext = $('input[name="subtext"]').val();
        var textbox = document.getElementById( "target" ).value ;
        // $('#form-name').children().each(function (i, elm) {
        //     names += $(elm).val() + '、';
        // })
        // names = names.slice(0, -1);

        var msg = `種別：${sub_type}\n ${from}\n会社名：${camp}\n担当者氏名：${par}\n電話番号：${tele}\n内容：${textbox}\n備考：${subtext}`;
        sendText(msg);
        
        return false;
    });
});