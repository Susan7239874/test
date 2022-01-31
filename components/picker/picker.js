// components/picker/picker.js
var mulitiArray = [];//年月日时分5个数组存于一个数组
var mulitiIndex = [];//年月日时分对应的index
// 给array push 5 [],1：去年今年和明年 （补假 提前申请）,月份12分月,日 1-31日,时01-24 ,分
//  选中当年，月，日，时，分  选中当天，要根据月份动态调整这个数组，例如2月，是不可以有28的
// mulitiIndex 如何选中，把现在的年 月 日 时 分 弄出来，和数组对比indexOf 出现的位置push到mulitiIndex中
var nowt = new Date();
var nowArray = [nowt.getFullYear(),nowt.getMonth()+1, nowt.getDate(), nowt.getHours(), nowt.getMinutes()];//现在年月日时分
nowArray.forEach(function(item, index, arr) {
    nowArray[index]=item<10?'0'+item:String(item)
})
var f = length => Array.from({length}).map((v, k) => {//一个快速生成1--(k+1)个数的函数
        let value=k+1;
        value=value<10?'0'+value:String(value);
        return value;
}
);
var year = [String(Number(nowArray[0]) - 1), nowArray[0],String(Number(nowArray[0]) + 1)];
var month = f(12);
var day = f(31);
var hour = f(24);
var min = f(59);
mulitiArray.push(year);//年
mulitiArray.push(month)//月
mulitiArray.push(day)//日
mulitiArray.push(hour)// 时
mulitiArray.push(min);//分
for (var i = 0; i < 5; i++) {
    let arr = [];
    switch (i) {
        case 0:
            arr = year;
            break;
        case 1:
            arr = month;
            break;
        case 2:
            arr = day;
            break;
        case 3:
            arr = hour;
            break;
        case 4:
            arr = min;
            break;
    }
    mulitiIndex[i] = arr.indexOf(nowArray[i]);//mulitiIndex找到nowArray当前年月日时分对应的index
}
console.log(nowArray)
console.log(mulitiArray, mulitiIndex)
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        multiArray: {
            type: Array,
            value: JSON.parse(JSON.stringify(mulitiArray))
        },
        multiIndex: {
            type: Array,
            value:JSON.parse(JSON.stringify(mulitiIndex))
        },
        multiArray2: {
            type: Array,
            value: JSON.parse(JSON.stringify(mulitiArray))
        },
        multiIndex2: {
            type: Array,
            value: JSON.parse(JSON.stringify(mulitiIndex))
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        hours: '0小时',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindMultiPickerChange: function (e) {
            // console.log('picker发送选择改变，携带值为', e.detail.value)
            this.setData({
                multiIndex: e.detail.value
            })
            this.getTime()
        },
        bindMultiPickerColumnChange: function (e) {
            // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
            var data = {
                multiArray: this.data.multiArray,
                multiIndex: this.data.multiIndex
            };
            data.multiIndex[e.detail.column] = e.detail.value;
            switch (e.detail.column) {//修改的列index
                case 0://年
                    break;
                case 1://月
                    var daynum = new Date(data.multiArray[0][data.multiIndex[0]],data.multiArray[1][e.detail.value], 0).getDate();//这个月份总天数
                    var length = data.multiArray[2].length;
                    // console.log(daynow,daynum,length);
                    data.multiIndex[2]=0;//每次修改月，日更新为0
                    if(daynum!==length){//假如旧月和新月的天数一样可不改
                        console.log(2)
                      data.multiArray[2]=f(daynum);//刷新月份对应的天数
                    }
                    break;
            }
            this.setData({
                multiArray:data.multiArray,
                multiIndex:data.multiIndex
            });
        },
        bindMultiPickerChange2: function (e) {
            console.log('picker2发送选择改变，携带值为', e.detail.value)
            this.setData({
                multiIndex2: e.detail.value
            })
            this.getTime();
        },
        bindMultiPickerColumnChange2: function (e) {
            console.log('修改2的列为', e.detail.column, '，值为', e.detail.value);
            var data = {
                multiArray: this.data.multiArray2,
                multiIndex: this.data.multiIndex2
            };
            data.multiIndex[e.detail.column] = e.detail.value;
            switch (e.detail.column) {//修改的列index
                case 0://年
                    break;
                case 1://月
                    var daynum = new Date(data.multiArray[0][data.multiIndex[0]],data.multiArray[1][e.detail.value], 0).getDate();//这个月份总天数
                    var length = data.multiArray[2].length;
                    // console.log(daynow,daynum,length);
                    data.multiIndex[2]=0;//每次修改月，日更新为0
                    if(daynum!==length){//假如旧月和新月的天数一样可不改
                        data.multiArray[2]=f(daynum);//刷新月份对应的天数
                    }
                    break;
            }

            this.setData({
                multiArray2:data.multiArray,
                multiIndex2:data.multiIndex
            });
        },
        getTime(){//动态计算时间差，不合适则返回错误提示
            var data = {
                multiArray: this.data.multiArray,
                multiArray2: this.data.multiArray2,
                multiIndex: this.data.multiIndex,
                multiIndex2: this.data.multiIndex2
            };
            var multiarr=[];
            var multiarr2=[];
            for(var i=0;i<5;i++){
                multiarr[i]=data.multiArray[i][data.multiIndex[i]];
                multiarr2[i]=data.multiArray2[i][data.multiIndex2[i]];
            }
            var time1=new Date(multiarr[0],Number(multiarr[1])-1,multiarr[2],multiarr[3],multiarr[4]).getHours();
            var time2=new Date(multiarr2[0],Number(multiarr2[1])-1,multiarr2[2],multiarr2[3],multiarr2[4]).getHours();
            var tip='';
            if(time1>time2){
                tip='时间选择错误'
            }else{
                tip=(time2-time1)+'小时';
            }
            this.setData({
                hours:tip
            })

        }
    },
    lifetimes: {
        attached: function () {
            // 在组件实例进入页面节点树时执行

        },
        detached: function () {
            // 在组件实例被从页面节点树移除时执行
        },
    },
})
