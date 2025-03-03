<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="12">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
                    <h1>Hello</h1>
                    <h2>欢迎来到我的项目</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input :prefix-icon="Lock" type="password"  v-model="loginForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" @click="login" class="login_btn" type="primary" >登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive,ref} from 'vue';
//引入用户相关的小仓库
import useUserStore from '@/store/modules/user';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
//引入获取当前时间的函数
import { getTime } from '@/utils/time';
let useStore= useUserStore()
//获取el-form组件
let loginForms = ref()
//获取路由器
let $router = useRouter()
//定义变量控制按钮加载效果
let loading =ref(false)
//收集账号与密码的数据
let loginForm = reactive({username:'admin',password:'111111'})
//登录按钮回调
const login = async()=>{
    //保证全部表单项校验通过再发请求
    await loginForms.value.validate()
    //加载效果：开始加载
    loading.value=true
    try {
        //保证登陆成功
        await useStore.userLogin(loginForm)
        //编程式导航跳转到展示数据首页
        $router.push('/')
        //登陆成功提示信息
        ElNotification({
            type:'success',
            message:'欢迎回来',
            title:`Hi,${getTime()}好`
        })
        //登录成功加载效果也消失
        loading.value=false
    } catch (error) {
        //登陆失败 加载效果消失
        loading.value=false
        ElNotification({
            type:'error',
            message:(error as Error).message
        })
    }
}
//自定义校验规则函数
const  validatorUserName =(rule:any,value:any,callBack:any)=>{
    //rule：即为校验规则对象
    //value:即为表单元素文本内容
    //函数：如果符合条件callBack放行通过即可
    //如果不符合条件callBack方法，注入错误提示信息
    if(value.length>=5){
        callBack()
    }else{
        callBack(new Error('账号长度至少五位'))
    }
}
const  validatorPassword =(rule:any,value:any,callBack:any)=>{
    if(value.length>=6){
        callBack()
    }else{
        callBack(new Error('密码长度至少六位'))
    }
}

//定义表单校验需要配置对象
const rules ={
    //规则对象属性：
    //required，代表这个字段务必要校验的
    //min:文本长度至少多少位
    //max:文本长度最多多少位
    //message:错误的提示信息
    //trigger：触发检验表单的时机 change->文本发生变化触发校验，blur：失去焦点的时候触发校验规则
    username:[
        // {required:true,min:5,max:10,message:'账号长度至少五位',trigger:'change'}
        {trigger:'change',validator:validatorUserName}
    ],
    password:[
        // {required:true,min:6,max:10,message:'密码长度为六到十位',trigger:'change'}
        {trigger:'change',validator:validatorPassword}
    ]
}
</script>

<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;


    .login_form {
        position: relative;
        width: 60%;
        top: 30vh;
        background-color: rgba($color: white, $alpha: 0.4);
        border-radius: 10px;
        background-size: cover;
        padding: 40px;

        h1 {
            color: white;
            font-size: 40px;
        }

        h2 {
            color: white;
            font-size: 20px;
            margin: 20px 0;
        }

        .login_btn {
            width: 100%;
            background-color: #409eff;
            /* Element Plus 默认背景色 */
            color: white;
            /* 默认字体颜色 */
            border: 1px solid #409eff;
            /* 默认边框样式 */
            padding: 10px 20px;
            border-radius: 4px;
        }

        .login_btn:hover {
            background-color: #66b1ff;
            /* 悬停时背景色 */
        }
    }
}
</style>