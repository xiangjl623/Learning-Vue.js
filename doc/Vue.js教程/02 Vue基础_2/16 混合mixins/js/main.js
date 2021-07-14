var base = {
      methods:{
          show: function(){
             this.visible = true
          },
          hide: function(){
             this.visible = false
          }
      },
      data: function(){
             return {
                visible: false
             }
      }
}

Vue.component('tooltip',
   {
      template: `<div>
                    <span @mouseenter='show' @mouseleave='hide'> tooltip</span>
                    <br/>
                    <span v-if="visible"> show tooltip</span>
                 </div>`,
      mixins: [base]
   }
)

new Vue({
    el: '#app',
})
