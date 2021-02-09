<template>
  <div id="customTable">
    <div class="showIcon">
      <i class="el-icon-menu" @click="showMoreList()"></i>
      <ul class="selectList" v-if="showContent">
        <!-- <el-checkbox-group v-model="checkedGroup" @change="handleCheckedCitiesChange"  size="medium"> -->
        <li v-for="item in list" :key="item.name">
          <template v-if="item.display">
            <el-checkbox v-model="item.favorate" border>{{
              item.comment
            }}</el-checkbox>
          </template>
        </li>
        <!-- </el-checkbox-group> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "customTableSelect",
  props: {
    list: {
      //是否可折叠
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      //控制是否折叠
      showContent: false,
      checkedGroup: [],
    };
  },
  watch: {},
  methods: {
    showMoreList() {
      this.showContent = !this.showContent;
      if (this.showContent && this.checkedGroup.length == 0) {
        this.list.forEach((item) => {
          if (item.favorate) {
            this.checkedGroup.push(item.code);
          }
        });
      }
    },
    handleCheckedCitiesChange() {
      let checkedList = [];
      this.list.forEach((item) => {
        this.checkedGroup.forEach((checked) => {
          if (item.code == checked) {
            item.favorate = true;
          } else {
            item.favorate = false;
          }
        });
      });
      console.log(checkedList);
      // this.$emit('changeTable', checkedList)
    },
  },
};
</script>

<style lang="less" scoped>
#customTable {
  margin-top: 14px;
}
.showIcon {
  text-align: right;

  font-size: 25px;
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
    border: 1px solid rgb(238, 238, 238);
    li {
      padding: 0 10px;
      line-height: 50px;
    }
  }
}
.showIcon i {
  cursor: pointer;
}
</style>
