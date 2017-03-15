var app =angular.module("app", [])
app.controller("white",function ($scope,$timeout,$interval) {
    var vm = this;
    vm.arr=[];              //九个
    var timer;              //定时器
    vm.game=true;          //
    vm.add=0;               //加分
    vm.del=0;               //减分
    vm.time=1400;
    vm.num='一';
    //地鼠对象
    var Mouse = function () {
        this.bol=false;
    };
    vm.test=function (o) {
        var src;
        if(o.bol){
            $timeout.cancel(src)
            vm.src=""
            vm.src="mi.mp3"
            var src = $timeout(function () {
                vm.src=""
            },1000)
            this.bol=!this.bol
            vm.add++;
        };
        if(!o.bol) {
            vm.del++;
        }
        if(vm.del==5){
            alert("点错5次了小贱人")
            vm.end()
        }
        if(vm.data==30){
            alert("30分了还想咋的")
            vm.end()
        }
        vm.data=vm.add-vm.del;

    }
    //生成默认地鼠数组
    vm.map=function () {
        vm.data=0;
        for(var i=0;i<9;i++){
            vm.arr[i] = new Mouse()
        }
    }
    vm.map();


    //start
    vm.start=function () {
        if(vm.data==10){
            vm.num='二';
            vm.time=1200
        }else if(vm.data==20){
            vm.num='三';
            vm.time=1000
        }
        vm.game=false;

        timer=$timeout(function () {
                for(var i=0;i<9;i++){
                    vm.arr[i].bol=false
                }
                var num=Math.floor(Math.random()*9);
                vm.start();
                vm.arr[num].bol=true;
        },vm.time)
    }
    //end
    vm.end=function () {
        $timeout.cancel(timer)
        vm.data=0;
        vm.del=0;
        vm.add=0;
        vm.map();
        vm.game=true
    }

})