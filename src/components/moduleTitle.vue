<template>
  <div id="moduleTitle">
    <div class="module-title" :class="{'can-collapse':collapsible}">
      <i class="bold-line"></i>
      <span class="title-text">{{title}}</span>
      <span class="right-part" @click="showContent = !showContent" v-if="collapsible">
        <span>{{showContent?'收起':'展开'}}</span>
        <i class="icon-collapse el-icon-arrow-down" :class="{'arrowRotate':!showContent}"></i>
      </span>
    </div>
    <collapse-transition>
      <div v-show="showContent">
        <slot></slot>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
  export default {
    name: 'moduleTitle',
    props: {
      collapsible: {//是否可折叠
        type: Boolean,
        default: false
      },
      title: String//模块标题
    },
    data() {
      return {
        //控制是否折叠
        showContent: true
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/css/vars";
  @import "../assets/css/common";

  .module-title {
    padding: 6px 0 6px 14px;
    margin-bottom: 10px;
    position: relative;
    text-align: left;
    line-height: 22px;
  }

  .can-collapse {
    background: @grey-level9;
  }

  .bold-line {
    background-color: @theme-color;
    position: absolute;
    top: 9px;
    left: 0;
    width: 4px;
    height: 17px;
    border-radius: 20px;
    vertical-align: bottom;
    margin-right: 4px;
  }

  .title-text {
    font-size: 16px;
    font-weight: 600;
  }

  .right-part {
    float: right;
    cursor: pointer;
    color: @theme-color;
    margin-right: 6px;
  }
  .icon-collapse {
    margin-right: 4px;
    transition: transform .3s;
  }
  .right-text {
    font-size: 12px;
  }
</style>
