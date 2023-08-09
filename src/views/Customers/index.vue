<template>
    <el-row class="top1">
        <el-col :span="5">
            <span>分类名称:
                <el-autocomplete :trigger-on-focus="false" clearable class="inline-input w-50" placeholder="输入分类名称" />
            </span>
        </el-col>
        <el-col :span="4">
            <span>所属商户:

            </span>
        </el-col>
        <el-col :span="4">
            <span>是否启用:

                <el-select v-model="value" class="m-2" placeholder="Select" size="large">
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

    <el-button text @click="centerDialogVisible = true">
        新增客户分类
    </el-button>

    <el-dialog v-model="centerDialogVisible" title="新增客户分类" width="30%" align-center>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="上级分类" prop="region">
                <el-select v-model="ruleForm.region" placeholder="流动商店">
                    <el-option label="流动商店" value="shanghai" />
                    <el-option label="固定商店" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="分类名称" prop="name">
                <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="所属商户" prop="count">
                <el-select v-model="ruleForm.count" placeholder="所属商户">
                    <el-option label="商户1" value="shanghai" />
                    <el-option label="商户2" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="是否启用" prop="delivery">
                <el-switch v-model="ruleForm.delivery" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    保存
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">取消</el-button>
            </el-form-item>
        </el-form>
        <!-- <template #footer>
            <span class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">
                    保存
                </el-button>
            </span>
        </template> -->
    </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const centerDialogVisible = ref(false)
interface RuleForm {
    name: string
    region: string
    count: string
    date1: string
    date2: string
    delivery: boolean
    type: string[]
    resource: string
    desc: string
}

const value = ref('')

const options = [
    {
        value: '全部',
        label: '全部',
    },
    {
        value: '启用中',
        label: '启用中',
    },
    {
        value: '停用中',
        label: '停用中',
    }
]

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    name: 'Hello',
    region: '',
    count: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: '请输入分类名称', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    region: [
        {
            required: true,
            message: '请选择上级分类',
            trigger: 'change',
        },
    ],
    count: [
        {
            required: true,
            message: '请选择所属商户',
            trigger: 'change',
        },
    ],
    date1: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change',
        },
    ],
    date2: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change',
        },
    ],
    type: [
        {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
        },
    ],
    resource: [
        {
            required: true,
            message: 'Please select activity resource',
            trigger: 'change',
        },
    ],
    desc: [
        { required: true, message: 'Please input activity form', trigger: 'blur' },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

// const options = Array.from({ length: 10000 }).map((_, idx) => ({
//     value: `${idx + 1}`,
//     label: `${idx + 1}`,
// }))
</script>

<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 800px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}

.top1 {
    padding: 20px 0px;
    border-bottom: 1px solid #ccc;
}
</style>