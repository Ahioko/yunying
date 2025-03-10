//引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
//引入elemnet-plus提供全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//全局对象
const allGloablComponent= { SvgIcon,Pagination}
//对外暴露插件对象
export default{
   //@ts-ignore
    install(app){
        //注册项目全部的全局组件
        Object.keys(allGloablComponent).forEach(key =>{
            //注册为全局组件
            //@ts-ignore
            app.component(key,allGloablComponent[key])
        });
        //将element-plus提供图标注册为全局组件
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
          }
    }
}