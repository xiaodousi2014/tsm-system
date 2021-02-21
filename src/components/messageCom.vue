<template>
  <div v-loading="loading">
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="item in data" class="infinite-list-item">
        <span class="name">{{ item.content }}</span>
        <el-button v-if="item.read_status==0" size="mini" @click="changeItem(item)">已读</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import Common from "../api/common";

export default {
  name: "messageCom",
  props: {
    message_type:{
      type: [Number, String],
      default: 1, // 1通知 2消息
    }
  },
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      page_total: 0,
      data: [],
      loading:false
    }
  },
  created() {
    this.queryTable()
  },
  methods: {
    queryTable() {
      let params = {
        "indexArray": [{
          "col_type": "int",
          "col_name": "message_type",
          "value": this.message_type,// 1通知 2消息
          "relation": "1",
          "indexType": "1"
        },
        {
          "col_type":"int",
          "col_name":"notice_user_id",
          "value": sessionStorage.getItem("userId"),
          "relation":"1",
          "indexType":"1"
        }
        ],
        "orderField": "read_status, create_time desc",
        "pageNum": this.pageNum,
        "pageSize": this.pageSize
      }
      console.log(this.$parent)

      console.log(this.page_total/10,Math.ceil(this.page_total/10),this.pageNum)
      if(this.loading || (this.page_total!=0 && Math.ceil(this.page_total/10) < this.pageNum)){
        return
      }
      this.loading = true
      Common.queryMessage(params).then((res)=>{
        if(res.code === '0000'){
          // this.pageNum = res.page.page_num
          this.page_total = res.page.page_total
          if(this.pageNum>1){
            this.data = this.data.concat(res.data.searchList)
          }else{
            this.data = res.data.searchList
          }
        }
        this.loading = false
      })
    },
    load() {
      this.pageNum++
      this.queryTable()
    },
    changeItem(item) {
      let params = {"ids": [item.id]}
      Common.updateMessage(params).then((res)=>{
        if(res.code=='0000'){
          this.$emit('getMessageCount')
          this.pageNum = 1
          this.page_total = 0
          this.data = []
          this.queryTable()
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.infinite-list{
  width: 100%;
  max-height: 280px;
  box-sizing: border-box;
  .infinite-list-item{
    list-style: none;
    width: 100%;
    position: relative;
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    .name{
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
