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
       path:'/login' ,
        component:{
           template:`
        <div>
            <h1>登录</h1>
        </div>`},
    },
    {
       path:'/post' ,
       meta:{
          login_rerquired: true
       },
       component:{
           template:`
        <div>
            <h1>帖子</h1>
            <router-link to='more' append>帖子详情</router-link>
        </div>`},
        children:[
            {
                path: 'more',
                component:{
                    template:`
                        <div>XXX的详细信息</div>
                   `
                }
            }
        ]
    }
];

var router = new VueRouter({
    routes:routes,
});

router.beforeEach(function(to, from, next){
    var logined_in = false;
    //if (!logined_in && to.matched.some(function (item){ //????????
    //     console.log("************path:" + item.path);
    //     return item.path == 'post';
    //}))
    if (!logined_in && to.matched.some(function (item){
        return item.meta.login_rerquired;
      }))
    {
       console.log('you are not login!');
       next('/login');
    }
    else{
        next();
    }
  }
);

router.afterEach(function(to, from){
  //console.log(to.path);
  //console.log(from.path);
});

new Vue({
    el:'#app',
    router:router
})
