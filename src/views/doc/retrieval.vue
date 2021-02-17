<template>
  <div class="content_box">
    <div class="marginTo14 marginLeftAndRight paddingBtm20">
      <div v-for="(item,index) in valList" :key="item.key">
        {{ item.key }}
        <el-select v-model="item.val1"
                   class="select-sty"
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="item.val2"
                   class="select-sty"
                   placeholder="请选择">
          <el-option v-for="item in options2"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <el-input v-model="item.valinp" class="select-sty"/>
        <el-select v-model="item.val3"
                   class="select-sty"
                   placeholder="请选择">
          <el-option v-for="item in options3"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <el-button @click="deleteItem(item.key)" size="mini">删除</el-button>
        <br/>
        <el-button @click="add" v-if="index === valList.length-1" size="mini">添加</el-button>
      </div>

    </div>

  </div>
</template>

<script>
let valInfo = {
  val1: '1',
  val2: '1',
  valinp: '',
  val3: '1',
  key: 1
}
export default {
  components: {},
  data() {
    return {
      ruleForm:{},
      valList: [],
      value: '',
      value1: '1',
      value2: '',
      value3: '',
      key: 1,
      options: [
        {
          value: '1',
          label: '文件名'
        },
        {
          value: '2',
          label: '文件类型'
        },
        {
          value: '3',
          label: '承接人'
        }
      ],
      options2: [
        {
          value: '1',
          label: '等于'
        },
        {
          value: '2',
          label: '不等于'
        },
        {
          value: '3',
          label: '小于'
        },
        {
          value: '4',
          label: '大于'
        },
        {
          value: '5',
          label: '包含'
        },
        {
          value: '6',
          label: '不包含'
        }
      ],
      options3: [
        {
          value: '1',
          label: '并且'
        },
        {
          value: '2',
          label: '或'
        },
        {
          value: '3',
          label: '非'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.valList.push(valInfo)
  },
  methods: {
    add() {
      console.log('111')
      this.key++
      let item = Object.assign({}, valInfo)
      item.key = this.key
      this.valList.push(item)
    },
    deleteItem(key) {
      let index = this.valList.findIndex(v => v.key == key)
      this.valList.splice(index, 1)
      console.log(index)
    },
    submit() {
      console.log(this.valList)
    }
  },
}
</script>

<style lang='less' scoped>
.select-sty {
  width: 120px;
}
</style>
