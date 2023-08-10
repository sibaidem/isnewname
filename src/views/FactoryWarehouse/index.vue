<template>
  <div>
    <div class="flx all">
      <div class="flx">
        <span>仓库编号：</span>
        <div class="input1">
          <el-input v-model="input" placeholder="请输入仓库编号：" clearable />
        </div>
      </div>
      <div class="flx">
        <span>仓库名称：</span>
        <div class="input1">
          <el-input v-model="input" placeholder="请输入库名称" clearable />
        </div>
      </div>
      <div>
        <span>是否启用: </span>
        <el-select v-model="useValue" placeholder="全部">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
            :disabled="item.disabled" />
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
        <span class="btnReset"></span><el-button>重置</el-button>
      </div>
    </div>


    <hr>
    <div class="btnStore">
      <el-button type="primary" @click="addStore">新增仓库</el-button>
    </div>

    <!-- =====添加仓库界面====== -->
    <el-dialog v-model="dialogVisible" title="新增用户" width="60%" :before-close="handleClose">
      <hr>
      <div class="addStoreIcon">
      <div class="flx distance">
        <span>仓库编号：</span>
        <div class="input1">
          <el-input placeholder="请输入仓库编号"></el-input>
        </div>
      </div>
      <div class="flx distance">
        <span>仓库名称：</span>&nbsp;&nbsp;
        <div><el-input placeholder="请输入仓库名称"></el-input></div>
      </div>
      <div class="flx distance">
        <span>所属商户：</span>&nbsp;&nbsp;
        <div>
          <el-select v-model="storeValue" placeholder="请选择">
          <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value"
          :disabled="item.disabled" />
      </el-select>
        </div>
      </div>
      <div class="flx distance">
        <span>联系人：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div>
          <el-input placeholder="请输入联系人姓名"> </el-input>
        </div>
      </div>
      <div class="flx distance">
        <span>手机：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div>
          <el-input placeholder="请输入手机号码"> </el-input>
        </div>
      </div>
      <div class="check">
      是否启用：&nbsp;&nbsp;
      <el-checkbox v-model="checked1" label="启用" size="large" />
    </div>
    </div>
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
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">停用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="demo-pagination-block">
      <div class="demonstration">Jump to</div>
      <el-pagination v-model:current-page="currentPage3" v-model:page-size="pageSize3" :small="small" :disabled="disabled"
        :background="background" layout="prev, pager, next, jumper" :total="1000" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const dialogVisible = ref(false)
const addStore = () => {
  dialogVisible.value = true
}
const tableData = [{
  number: '1',
  StoreId: 'YG001',
  StoreName: '上海宝山一仓',
  EmployeeName: '大众',
  address: '上海市宝山区锦绣路99号',
  contactPerson: '张三',
  phone: "15145813692",
  isUse: '启用中',
  createTime: '2022-02-04 11:10:29'
},
{
  number: '1',
  StoreId: 'YG001',
  StoreName: '上海宝山一仓',
  EmployeeName: '大众',
  address: '上海市宝山区锦绣路99号',
  contactPerson: '张三',
  fixPhone: '2021-10-21 11:22:12',
  phone: "15145813692",
  isUse: '启用中',
  createTime: '2022-02-04 11:10:29'
},
{
  number: '2',
  StoreId: 'YG002',
  StoreName: '上海宝山一仓',
  EmployeeName: '大众',
  address: '上海市宝山区锦绣路99号',
  contactPerson: '张三',
  fixPhone: '2021-10-21 11:22:12',
  phone: "15145813692",
  isUse: '启用中',
  createTime: '2022-02-04 11:10:29'
},
{
  number: '3',
  StoreId: 'YG003',
  StoreName: '上海宝山一仓',
  EmployeeName: '大众',
  address: '上海市宝山区锦绣路99号',
  contactPerson: '张三',
  fixPhone: '2021-10-21 11:22:12',
  phone: "15145813692",
  isUse: '启用中',
  createTime: '2022-02-04 11:10:29'
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
const handleDelete = () => {
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
// 是否禁用
const useValue = ref('');
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
</script>

<style scoped>
.flx {
  display: flex;
}

.input1 {
  width: 60%;
  margin-left: 10px;
}

.btn {
  margin-bottom: 20px;
}

.all {
  margin-top: 20px;
}

.el-select {
  width: 40%;
}

.btnQuery {
  margin-right: 50px;
}

.btnAdd {
  margin: 20px auto;
}

.person {
  margin-left: -75px;
}
.btnStore{
  margin: 20px auto;
}
.addStoreIcon{
/*   border: 1px solid #ccc; */
  padding:  0 100px;
}
.distance{
  margin-top: 20px;
}
.check{
  margin-top: 10px;
}
</style>