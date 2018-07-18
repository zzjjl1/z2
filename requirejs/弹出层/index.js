/**
 * Created by Administrator on 2018/7/12.
 */
require(['dialog','jquery-1.12.4'],function (dialog) {
    $('#btn').on('click',function(){
        dialog.open({
            width:400,
            height:500,
            title:'注册',
            content:'content.html'
        });
    });


});