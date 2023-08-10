<template>
    <div >
          <div class="flx all">
                <div class="flx">
                     <span>分类名称：</span>
                  <div class="input1">
                     <el-input  v-model="input" placeholder="请输分类名称" clearable />
                  </div>
                </div>
                <div>
                  <span>是否启用: </span>
                  <el-select v-model="useValue" placeholder="全部">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                      />
                  </el-select>
                </div>
                <div class="person">
                  <span>所属商户: </span>
                  <el-select v-model="personValue" placeholder="请选择">
                    <el-option
                      v-for="item in optionsPerson"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                      />
                  </el-select>
                </div>
     <div class="btn">
     <span class="btnQuery"><el-button type="primary">查询</el-button> </span>
     <span class="btnReset"></span><el-button >重置</el-button> 
    </div> 
   </div>
     <hr>
     <div class="btnAdd">
     <el-button type="primary" @click="addWorker">新增分类</el-button > 
     </div>
 <!-- ====新增商店=== -->
 <el-dialog
     v-model="dialogVisible"
     title="新增客户分类"
     width="80%"
     :before-close="handleClose"
   >
   <hr> 
   <el-row class="addUser">
     <el-col :span="2"></el-col>
     <el-col :span="8">
        上级分类：<el-input></el-input>
        分类名称：<el-input placeholder="请输入分类名称"></el-input>
        卡号所属商户：<el-input></el-input>
        是否启用：<el-checkbox v-model="checked1" label="启用" size="large" />
     </el-col>
   </el-row>
     <template #footer>
       <span class="dialog-footer">
         <el-button @click="dialogVisible = false">取消</el-button>
         <el-button type="primary" @click="dialogVisible = false">
          确认
         </el-button>
       </span>
     </template>
   </el-dialog>
 
   <!-- ============渲染表格============= -->
   <el-table :data="tableData" stripe style="width: 100%" border>
     <el-table-column prop="number" label="" width="100" />
     <el-table-column prop="EmployeeId" label="分类名称" width="180" />
     <el-table-column prop="EmployeeNumber" label="上级" width="180" />
     <el-table-column prop="Merchant" label="所属商户" width="180" />
     <el-table-column prop="isUse" label="是否启用" width="180" />
     <el-table-column prop="createTime" label="创建时间" width="180" />
     <el-table-column label="操作">
       <template #default="scope">
         <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
           >编辑</el-button
         >
         <el-button
           size="small"
           type="danger"
           @click="handleDelete(scope.$index, scope.row)"
           >删除</el-button
         >
         <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
           >停用</el-button
         >
         <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
           >重置密码</el-button
         > -->
       </template>
     </el-table-column>
 
     <!--  =======编辑界面===========   -->
 
   </el-table>
   <!-- =====分页功能===== -->
   <div class="demo-pagination-block">
     <div class="demonstration">跳转</div>
     <el-pagination
       v-model:current-page="currentPage3"
       v-model:page-size="pageSize3"
       :small="small"
       :disabled="disabled"
       :background="background"
       layout="prev, pager, next, jumper"
       :total="1000"
       @size-change="handleSizeChange"
       @current-change="handleCurrentChange"
     />
   </div>
 </div>
 </template>
 
 <script setup lang="ts">
 import { reactive, ref } from 'vue'
 const input = ref('');
 const options = [
   {
     value: '启用',
     label: '启用',
   },
   {
     value: '禁用',
     label: '禁用',
     /* disabled: true, */
   },
 ]
 const options3 = [
     {
         value :"宝骏",
         label : '宝骏'
     },
     {
         value :"大众",
         label : '大众'
     },
 ]
 // 所属商户
 const personValue = ref('')
 const optionsPerson =[
 {
         value :"宝骏",
         label : '宝骏'
     },
     {
         value :"大众",
         label : '大众'
     },
 ]
 //新增门店
 const dialogVisible = ref(false)
 const addWorker = ()=>{
     dialogVisible.value = true
 
 }
 // table表格
 const tableData = [
   {
     number : '1',
     EmployeeId: '家电类客户',
     EmployeeNumber: '其他类',
     Merchant: '大众',
     isUse: '启用中',
     createTime: '2021-10-21 11:22:12',
   },
   {
     number : '2',
     EmployeeId: '大客户类',
     EmployeeNumber: '',
     Merchant: '宝骏',
     isUse: '启用中',
     createTime: '2021-10-21 11:22:12',
   },
   {
     number : '3',
     EmployeeId: '家电类客户',
     EmployeeNumber: '其他类',
     Merchant: '大众',
     isUse: '禁用中',
     createTime: '2021-10-21 11:22:12',
   },
   {
     number : '4',
     EmployeeId: '家电类客户',
     EmployeeNumber: '其他类',
     Merchant: '大众',
     isUse: '启用中',
     createTime: '2021-10-21 11:22:12',
   },
   {
     number : '5',
     EmployeeId: '家电类客户',
     EmployeeNumber: '其他类',
     Merchant: '大众',
     isUse: '启用中',
     createTime: '2021-10-21 11:22:12',
   }
 ]
 
 //删除功能
 import { ElMessage, ElMessageBox } from 'element-plus'
 const handleDelete = () =>{
     ElMessageBox.confirm(
     '是否进行删除',
     '警告',
     {
       confirmButtonText: '确定',
       cancelButtonText: '取消',
       type: 'warning',
     }
   )
     .then(() => {
       ElMessage({
         type: 'success',
         message: '删除成功',
       })
     })
     .catch(() => {
       ElMessage({
         type: 'error',
         message: '删除失败',
       })
     })
 }
 // 禁用
 const useValue = ref('')
 // .then(() => {
 //       deleteGoods(b.goods_id).then(res => {
 //         if (res.data.meta.status === 200) {
 //           ElMessage({
 //             type: 'success',
 //             message: '删除成功',
 //           })
 //           SelectGoods()
 //         } else {
 //           ElMessage({
 //             type: 'info',
 //             message: '删除失败',
 //           })
 //         }
 //       })
 //     })
 // }
 // 多选框
 const checked1 = ref(true);
 const checked2 = ref(true);
 //分页功能
 const currentPage1 = ref(5)
 const currentPage2 = ref(5)
 const currentPage3 = ref(5)
 const currentPage4 = ref(4)
 const pageSize2 = ref(100)
 const pageSize3 = ref(100)
 const pageSize4 = ref(100)
 const small = ref(false)
 const background = ref(false)
 const disabled = ref(false)
 
 const handleSizeChange = (val: number) => {
   console.log(`${val} items per page`)
 }
 const handleCurrentChange = (val: number) => {
   console.log(`current page: ${val}`)
 }
 //编辑功能
 const handleEdit = () => {
     
 
 }
 </script>
 
 <style scoped>
 
 .flx{
   display: flex;
 }
 .input1{
   width: 60%;
   margin-left: 10px;
 }
 .btn{
   margin-bottom: 20px;
 }
 .all{
   margin-top: 20px;
 }
 .el-select {
   width: 40%;
 }
 .btnQuery{
   margin-right: 50px;
 }
 .btnAdd{
   margin: 20px auto;
 }
 .person{
   margin-left: -75px;
 }
 </style>