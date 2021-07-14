var routes = [
    {
       path:'/' ,
        component:{
           template:`
        <div>
            <h1>首页</h1>
        </div>`},
    },
    {
        path:'/user' ,
        components:{
          sidebar:{
            template:`
                <div>
                   <ul>
                      <li>用户列表</li>
                      <li>权限管理</li>
                   </ul>
                </div>`
          },
          content:{
            template:`
                <div>
                   XXX
                </div>`
          }
      }
    },
    {
        path:'/post' ,
        components:{
          sidebar:{
            template:`
                <div>
                   <ul>
                      <li>帖子列表</li>
                      <li>回复</li>
                   </ul>
                </div>`
          },
          content:{
            template:`
                <div>
                   XXX YYYY
                </div>`
        }
      }
    }
];

var router = new VueRouter({
    routes:routes,
});

new Vue({
    el:'#app',
    router:router
})
