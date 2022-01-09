Component({
    properties: {
        searchValue:{
            type:String,
            value:null
        }
    },
    data: {
        config:'https://api.dg.zykjedu.cn/zhxy.files/Asset/',
    },
    methods: {
        // 点击叉叉触发父组件事件
        cancelSearch(){
            this.triggerEvent('cancelSearch')
        },
        //输入内容变化同步给父组件
		changeInput(e){
            this.triggerEvent('changeInput',{value:e.detail.value})
        }

    },
    lifetimes: {
        attached() {

        }
    }
})
