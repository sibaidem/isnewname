<template>
    <div>
        <el-row class="all">
        <el-col  :span = '4'>
            <span >
                员工编号：
                <el-autocomplete  v-model="input" placeholder="请输入员工编号" clearable />
            </span>
        </el-col>
        <el-col :span="4">
            <span >员工姓名:
                <el-autocomplete v-model="input" placeholder="请输入员姓名" clearable />
            </span>
       </el-col >
       <el-col :span="8">
       <span >
        是否启用:
    <el-select v-model="value" placeholder="全部">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
        />
    </el-select>
</span>
</el-col>
  <el-col :span="1">
    <el-button type="primary">查询</el-button> 
  </el-col>
<el-col :span="1">
    <el-button >重置</el-button>   
</el-col>
</el-row>
    <hr>
    <div class="btn">
    <el-button type="primary" @click="addStore">新增仓库</el-button > 
    </div>
<!-- =====添加仓库界面====== -->
<el-dialog
    v-model="dialogVisible"
    title="新增用户"
    width="80%"
    :before-close="handleClose"
  >
  <hr> 
       仓库编号：<el-input placeholder="请输入仓库编号"></el-input>
       仓库名称：<el-input placeholder="请输入仓库名称"></el-input>
       所属商户：<el-select v-model="storeValue" placeholder="请选择">
    <el-option
      v-for="item in options5"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </el-select>
      联系人 : <el-input placeholder="请输入联系人姓名"> </el-input>
      手机：<el-input placeholder="请输入手机号码"> </el-input>
      是否启用：<el-checkbox v-model="checked1" label="启用" size="large" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
         保存
        </el-button>
      </span>
    </template>
  </el-dialog>
<!-- ============渲染表格============= -->
<el-table :data="tableData" stripe style="width: 100%" border>
    <el-table-column prop="number" label="" width="100" />
    <el-table-column prop="StoreId" label="仓库编号" width="180" />
    <el-table-column prop="StoreName" label="仓库名称" width="180" />
    <el-table-column prop="EmployeeName" label="所属用户" width="180" />
    <el-table-column prop="address" label="地址" width="180" />
    <el-table-column prop="contactPerson" label="联系人" width="180" />
    <el-table-column prop="phone" label="手机" width="180" />
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
      </template>
    </el-table-column>
  </el-table>
  <div class="demo-pagination-block">
    <div class="demonstration">Jump to</div>
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
import {ref} from 'vue'
const dialogVisible = ref(false)
const addStore = ()=>{
    dialogVisible.value = true
  }
const tableData = [{
    number : '1',
    StoreId: 'YG001',
    StoreName: '上海宝山一仓',
    EmployeeName: '大众',
    address: '上海市宝山区锦绣路99号',
    contactPerson: '张三',
    phone:"15145813692",
    isUse: '启用中',
    createTime:'2022-02-04 11:10:29'
},
{
    number : '1',
    StoreId: 'YG001',
    StoreName: '上海宝山一仓',
    EmployeeName: '大众',
    address: '上海市宝山区锦绣路99号',
    contactPerson: '张三',
    fixPhone: '2021-10-21 11:22:12',
    phone:"15145813692",
    isUse: '启用中',
    createTime:'2022-02-04 11:10:29'
},
{
    number : '2',
    StoreId: 'YG002',
    StoreName: '上海宝山一仓',
    EmployeeName: '大众',
    address: '上海市宝山区锦绣路99号',
    contactPerson: '张三',
    fixPhone: '2021-10-21 11:22:12',
    phone:"15145813692",
    isUse: '启用中',
    createTime:'2022-02-04 11:10:29'
},
{
    number : '3',
    StoreId: 'YG003',
    StoreName: '上海宝山一仓',
    EmployeeName: '大众',
    address: '上海市宝山区锦绣路99号',
    contactPerson: '张三',
    fixPhone: '2021-10-21 11:22:12',
    phone:"15145813692",
    isUse: '启用中',
    createTime:'2022-02-04 11:10:29'
},

]
// 添加内的商品所属
const storeValue = ref('');
const options5 = [
  {
    value: 'Option1',
    label: '大众',
  },
  {
    value: 'Option2',
    label: '宝马',
  },
]
const checked1 = ref(false)
// 删除功能
import { ElMessage, ElMessageBox } from 'element-plus'
const handleDelete = () =>{
    ElMessageBox.confirm(
    '是否删除',
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
        message: '删除失败',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'error',
        message: '删除成功',
      })
    })
}
// 分页功能
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
</script>

<style scoped>

</style>