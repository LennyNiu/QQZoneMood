let history_dom = echarts.init(document.getElementById(HISTORY_DOM));
// avalon.config({
//     interpolate: ["[[","]]"]
// });

let vm = avalon.define({
    $id: 'qqzone',
    user: '',
    fetch_history_data: function () {
        $.ajax({
            url: '/get_history/1272082503/maicius',
            success: function (result) {
                console.log(result);
                draw_history_line(history_dom, result, "QQ空间说说历史曲线图");
            }
        })
    }
});



$(document).ready(function () {
    vm.fetch_history_data();
});