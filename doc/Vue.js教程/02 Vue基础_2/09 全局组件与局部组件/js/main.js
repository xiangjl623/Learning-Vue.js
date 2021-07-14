Vue.component('alert',
   {
            template:'<button @click="onClick">全局按钮</button>',
            methods:{
                 onClick:function(){
                     console.log('All.');
                 }
            }
   }
)

new Vue({
    el:'#seg1',
    components:{
        console:{
            template:'<button @click="onClick">局部按钮</button>',
            methods:{
            onClick:function(){
                console.log('Local.');
        }
        }
    }
    }
});

new Vue({
    el:'#seg2',
})
