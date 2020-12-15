<template>
  <div id="customTable"> <div class="showIcon"><i class="el-icon-menu" @click="showMoreList()"></i>
            <ul class="selectList" v-if="showContent">
       <!-- <el-checkbox-group v-model="checkedGroup" @change="handleCheckedCitiesChange"  size="medium"> -->
         <li v-for="item in list" :key="item.code">
           <el-checkbox  v-model="item.checked"  border>{{item.name}}</el-checkbox>
       </li>
  <!-- </el-checkbox-group> -->
       
    </ul>
       
      </div>
  </div>
</template>

<script>
  export default {
    name: 'customTableSelect',
    props: {
      list: {//是否可折叠
        type: Array,
        default: []
      }
    },
    data() {
      return {
        //控制是否折叠
        showContent: false,
         checkedGroup: [],
      }
    },
    watch: {
    },
    methods:{
      showMoreList() {
        this.showContent = !this.showContent;
        if(this.showContent && this.checkedGroup.length == 0) {
           this.list.forEach(item => {
          if(item.checked) {
            this.checkedGroup.push(item.code);
          }
        })
        }
      },
        handleCheckedCitiesChange() {
      let checkedList = [];
      this.list.forEach(item => {
        this.checkedGroup.forEach(checked => {
          if(item.code == checked) {
            item.checked = true;
          } else {
            item.checked = false
          }
        })
      })
      console.log(checkedList);
      // this.$emit('changeTable', checkedList)
    }
    }
  }
</script>

<style lang="less" scoped>
  .showIcon {
  text-align: right;
  padding-right: 20px;
  font-size:25px;
  position: relative;
  .selectList {
   position: absolute;
   height: 400px;
   overflow-y: scroll;
   top: 30px;
   right: 20px;
   z-index: 99;
    min-width: 100px;
    text-align: left;
    font-size: 20px;
    padding: 20px 0;
    background: #fdfdfd;
    border: 1px solid rgb(238,238,238);
    li {
      padding:0 10px;
      line-height: 50px;
    }
  }
}
.showIcon i {
  cursor: pointer;
}
</style>
