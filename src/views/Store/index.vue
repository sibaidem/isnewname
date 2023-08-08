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
            <el-button @click="onAddItem">新增门店</el-button>
        </div>
        <el-table :data="tableData" style="width: 100% " max-height="500">
            <el-table-column prop="date" label="序列号" width="130" />
            <el-table-column prop="time" label="时间" width="130" />
            <el-table-column prop="storename" label="门店名称" width="130" />
            <el-table-column prop="types" label="类型" width="130" />
            <el-table-column prop="number" label="门店编号" width="130" />
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
import { ref } from 'vue'

interface RestaurantItem {
    value: string
    link: string
}

const state1 = ref('')
const state2 = ref('')
const value = ref('')

const options = [
    {
        value: '全部',
        label: '全部',
    },
    {
        value: '停用中',
        label: '停用中',
    },
    {
        value: '启用中',
        label: '启用中',
    },

]
const tableData = ref([
    {
        date: 1,
        time: '2023-8-8',
        storename: '大连一刻嗖',
        types: '流动商店',
        number: 123,
        storeroom: '大连优衣库',
        phone: '151315154321',
        yorn: '启用',
        contacts: '张三'
    },
    {
        date: 2,
        time: '2023-8-7',
        storename: '大连二刻嗖',
        types: '固定商店',
        number: 124,
        storeroom: '大连迅雷',
        phone: '18345773695',
        yorn: '不启用',
        contacts: '王五'
    },
])

const handleSelect = (item: RestaurantItem) => {
    console.log(item)
}
const onAddItem = () => {
    let nmubersaa = 0
    let numbers=tableData.value[2].number
    console.log(numbers)
    nmubersaa = nmubersaa + 1
    tableData.value.push({
        date: nmubersaa,
        time: '2023-8-6',
        storename: '大连三刻嗖',
        types: '固定商店',
        number: numbers,
        storeroom: '大连网易',
        phone: '15684511311',
        yorn: '启用',
        contacts: '赵四'
    })
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

</style>