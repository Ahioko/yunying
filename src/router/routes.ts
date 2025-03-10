//对外暴露配置路由
export const constantRoute = [
  {
    //登录
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login", //命名路由
    meta:{
      title:'登录',
      hidden:true,
      icon:"Orange"
    }
  },
  {
    //登陆成功以后展示数据的路由
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta:{
      title:'layout',
      hidden:true,
      icon:"Avatar"
    },
    redirect:'/home',
    children:[
      {
        path:'/home',
        component:()=>import('@/views/home/index.vue'),
        meta:{
          title:'首页',
          icon:"House"
        },
      }
    ]
  },
  {
    path:'/screen',
    component:()=> import('@/views/screen/index.vue'),
    name:'Screen',
    meta:{
      title:'数据大屏',
      icon:'DataLine'
    }
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    meta:{
      title:'404',
      hidden:true,
    },
  },
  {
    path:'/acl',
    component:()=>import('@/layout/index.vue'),
    name:'Acl',
    meta:{
      title:'权限管理',
      icon:'Operation'
    },
    children:[
      {
        path:'/acl/user',
        component:()=>import('@/views/acl/user/index.vue'),
        name:'User',
        meta:{
          title:'用户管理',
          icon:'User'
        }
      },
      {
        path:'/acl/role',
        component:()=>import('@/views/acl/role/index.vue'),
        name:'Role',
        meta:{
          title:'角色管理',
          icon:'UserFilled'
        }
      },
      {
        path:'/acl/permission',
        component:()=>import('@/views/acl/permission/index.vue'),
        name:'Permission',
        meta:{
          title:'菜单管理',
          icon:'Grid'
        }
      }
    ]
  },
  {
    path:'/product',
    component:()=>import('@/layout/index.vue'),
    name:'Product',
    meta:{
      title:'商品管理',
      icon:'Goods',
    },
    children:[
      {
        path:'/product/trademark',
        component:()=>import('@/views/product/trademark/index.vue'),
        name:'Trademark',
        meta:{
          title:'品牌管理',
          icon:'ShoppingCartFull',
        }
      },
      {
        path:'/product/attr',
        component:()=>import('@/views/product/attr/index.vue'),
        name:'Attr',
        meta:{
          title:'属性管理',
          icon:'ChromeFilled',
        }
      },
      {
        path:'/product/spu',
        component:()=>import('@/views/product/spu/index.vue'),
        name:'Spu',
        meta:{
          title:'Spu管理',
          icon:'Calendar',
        }
      },
      {
        path:'/product/sku',
        component:()=>import('@/views/product/sku/index.vue'),
        name:'Sku',
        meta:{
          title:'Sku管理',
          icon:'HelpFilled',
        }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta:{
      title:'任意路由',
      hidden:true,
    },
  },
];
