/**
 * Created by Administrator on 2018/7/12.
 */
define(['isArray'],function(isArray){
    function sortArray(arr){
        if(isArray(arr)){
            arr.sort(function(a,b){
                return a-b;
            });
            return arr;
        }else{
            return '请输入数组';
        }
    };
    return sortArray;
});