// https://vite.dev/config/
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//引入svg需要用的插件
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import {viteMockServe} from 'vite-plugin-mock'
export default defineConfig(({command})=>{
  return {
    plugins: [vue(),
      createSvgIconsPlugin({
        iconDirs:[path.resolve(process.cwd(),'src/assets/icons')],
        symbolId:'icon-[dir]-[name]'
      }),
      viteMockServe({
       
        enable: command==='serve'
      })
    ],
    resolve:{
      alias:{
        "@": path.resolve(__dirname,'./src')
      }
    },
    css:{
      preprocessorOptions:{
        scss:{
          javascriptEnabled:true,
          additionalData:`@use "@/styles/variable" as *;`
        }
      }
    }
  }
})
