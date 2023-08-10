<template>
  <div class="box">
    <div class='all'>
      <div class='carousel'>
        <el-carousel :interval="2000" arrow="never">
          <el-carousel-item v-for="item in pic" :key="item">
            <img src="../../assets/1.png" alt="" class="login-img">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class='loginBox'>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="200px" class="demo-ruleForm">
          <el-form-item label="账号：" prop="username">
            <el-input v-model="ruleForm.username" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLogin(ruleFormRef)">登录</el-button>
            <el-button @click="handleReset(ruleFormRef)">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
    
<script setup lang = 'ts'>

import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
const ruleFormRef = ref()
const ruleForm = reactive({
  username: '',
  password: '',
  token : '1'
})
const rules = reactive({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 3, max: 10, message: '账号的长度在3到10之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 10, message: '密码长度在3到10之间', trigger: 'blur' },
  ],
})
// 登录功能
import {useRouter} from 'vue-router'
const router = useRouter()
const handleLogin = () => {
  if (ruleForm.password == '123123' && ruleForm.username == '111111') {
    ElMessage.success('登陆成功')
    router.push('/index')
  } else {
    ElMessage.error('登录失败')
  }
}
//重置功能
const handleReset = () => {
  ruleForm.username = '',
    ruleForm.password = ''
}



const pic = [
  '../../assets/1.png',
  '../../assets/2.png',
  '../../assets/3.png',
  '../../assets/4.png',
]
const submitForm = () => {

}
const resetForm = () => {
  console.log(456)
}
</script>
    
<style scoped>
.box {
  background: #000;
  height: 1000px;
  background: url('../../assets/5.jpg');
  overflow: hidden;
  background-size: cover;


}

.all {
  /* background: #000; */
  display: flex;
  flex-direction: row;
  margin: 200px auto;
  width: 1000px;
  height: 500px;
  background: #ccc;
  margin-top: 200px;
  border: 1px solid #ccc;
  border-radius: 20px;

}

.loginBox {
  margin-top: 180px;
  margin-right: 100px;
  color: black;
}

/* ===轮播图=== */
.carousel {
  width: 500px;
  height: 500px;
}

.login-img {
  width: 100%;
  height: 100%;
  border-radius: 20px
}

:deep(.el-form-item__label) {
  font-size: 25px;
}

.el-button {
  font-size: 18px;
}

:deep(.el-carousel__container) {
  height: 500px;


}
</style>