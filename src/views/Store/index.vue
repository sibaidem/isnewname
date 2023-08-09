<template>
    <div class="box">
        <el-row class="top1">
            <el-col :span="5">
                <span>门店编号:
                    <el-autocomplete v-model="state1" :trigger-on-focus="false" clearable class="inline-input w-50"
                        placeholder="请输入门店编号" @select="handleSelect" />
                </span>
            </el-col>
            <el-col :span="5">
                <span>名称:
                    <el-autocomplete v-model="state2" :trigger-on-focus="false" clearable class="inline-input w-50"
                        placeholder="请输入门店名称" @select="handleSelect" /></span>
            </el-col>
            <el-col :span="4">
                <span>类型:
                    <el-select v-model="value" class="m-2" size="small">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </span>
            </el-col>
            <el-col :span="4">
                <span>启用:
                    <el-select v-model="value" class="m-2" size="small">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </span>
            </el-col>
            <el-col :span="2">
                <el-button type="primary">查询</el-button>
            </el-col>
            <el-col :span="2">
                <el-button type="info">重置</el-button>
            </el-col>
        </el-row>
        <div class="btn1">
            <el-button text @click="dialogVisible = true">
                新增门店
            </el-button>
            <el-dialog v-model="dialogVisible" title="新增门店" width="40%" height="40%" :before-close="handleClose">

                <el-row>
                    <el-col :span="12">
                        门店编号：<el-autocomplete v-model="AddValue.numberis" :trigger-on-focus="false" clearable
                            class="inline-input w-50" placeholder="请输入门店编号" @select="handleSelect" />
                    </el-col>
                    <el-col :span="12">
                        门店名称：<el-autocomplete v-model="AddValue.storename" :trigger-on-focus="false" clearable
                            class="inline-input w-50" placeholder="请输入门店名" @select="handleSelect" />
                    </el-col>
                    <el-col :span="12">
                        添加时间：<el-autocomplete v-model="AddValue.time" :trigger-on-focus="false" clearable
                            class="inline-input w-50" placeholder="请输入时间" @select="handleSelect" />
                    </el-col>
                    <el-col :span="12">
                        门店类型：<el-autocomplete v-model="AddValue.types" :trigger-on-focus="false" clearable
                            class="inline-input w-50" placeholder="请输入门店类型" @select="handleSelect" />
                    </el-col>
                    <el-col :span="12">
                        联系电话：<el-autocomplete v-model="AddValue.phone" :trigger-on-focus="false" clearable
                            class="inline-input w-50" placeholder="请输入练习电话" @select="handleSelect" />
                    </el-col>
                    <el-col :span="12">
                        是否启用： <el-select v-model="AddValue.yorn" class="m-2" size="small">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>

                    </el-col>
                    <el-col :span="12">
                        添加厂库： <el-select v-model="AddValue.storeroom" class="m-2" size="small">
                            <el-option v-for="item in storeroom" :key="item.one" :label="item.two" :value="item.two" />
                        </el-select>
                    </el-col>
                    <el-col :span="12">
                        加联系人： <el-autocomplete v-model="AddValue.contacts" :trigger-on-focus="false" clearable
                            class="inline-input w-50" placeholder="请输入时间" @select="handleSelect" />
                    </el-col>
                </el-row>

                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="onAddItem" >
                            提交
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </div>
        <el-table :data="tableData" style="width: 100% " max-height="500">
            <el-table-column prop="date" label="序列号" width="130" />
            <el-table-column prop="time" label="时间" width="130" />
            <el-table-column prop="storename" label="门店名称" width="130" />
            <el-table-column prop="types" label="类型" width="130" />
            <el-table-column prop="numberis" label="门店编号" width="130" />
            <el-table-column prop="storeroom" label="厂库" width="130" />
            <el-table-column prop="phone" label="联系电话" width="130" />
            <el-table-column prop="yorn" label="是否启用" width="130" />
            <el-table-column prop="contacts" label="联系人" width="130" />
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
                        Remove
                    </el-button>

                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
    ElMessageBox.confirm('确定要关闭吗？')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}

interface RestaurantItem {
    value: string
    link: string
}

const state1 = ref('')
const state2 = ref('')
const value = ref('')


const options = [
    {
        value: '停用中',
        label: '停用中',
    },
    {
        value: '启用中',
        label: '启用中',
    },

]
const storeroom = [{

    one: 'ones',
    two: '大连优衣库'
}, {

    one: 'twos',
    two: '大连迅雷站'
},
]


const tableData = ref([
    {
        date: 1,
        time: '2023-8-8',
        storename: '大连一刻嗖',
        types: '流动商店',
        numberis: 123,
        storeroom: storeroom[0].two,
        phone: '151315154321',
        yorn: '启用',
        contacts: '张三'
    },
    {
        date: 2,
        time: '2023-8-7',
        storename: '大连二刻嗖',
        types: '固定商店',
        numberis: 124,
        storeroom: storeroom[1].two,
        phone: '18345773695',
        yorn: '不启用',
        contacts: '王五'
    },
])


const handleSelect = (item: RestaurantItem) => {
    console.log(item)
}

const AddValue = ref({
    storename: '',
    numberis:0,
    time:'',
    types:'',
    phone:'',
    contacts:'',
    yorn:'',
    storeroom:'',
    date:1
})
const onAddItem = () => {
    tableData.value.push({
        date: AddValue.value.date,
        time: AddValue.value.time,
        storename: AddValue.value.storename,
        types: AddValue.value.types,
        numberis: AddValue.value.numberis,
        storeroom:  AddValue.value.storeroom,
        phone:  AddValue.value.phone,
        yorn:  AddValue.value.yorn,
        contacts:  AddValue.value.contacts
    })
    dialogVisible.value = false
}
const deleteRow = (index: number) => {
    tableData.value.splice(index, 1)
}

</script>

<style scoped>
.top1 {
    padding: 20px 0px;
    border-bottom: 1px solid #ccc;
}

.btn {
    margin: 20px 40px;
    width: 40px;
    height: 30px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>