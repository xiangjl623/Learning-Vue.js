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
        component:{
           template:`
        <div>
            <h1>帖子</h1>
        </div>`},
    }
];

var router = new VueRouter({
    routes:routes,
});

router.beforeEach(function(to, from, next){
    var logined_in = false;
    if (!logined_in && to.path == '/post'){
       console.log('you are not login!');
       next('/login');
    }
    else{
        next();
    }
  }
);

router.afterEach(function(to, from){
  console.log(to.path);
  console.log(from.path);
});

new Vue({
    el:'#app',
    router:router
})
