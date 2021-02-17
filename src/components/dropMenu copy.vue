<template>
  <div>
    <div
      @mouseenter="onMouseOver()"
      @mouseleave="onMouseOut()"
    >
      <img
        class="imges"
        src="../assets/images/wei.png"
        alt=""
      />
      <div
        class="menu"
        v-if="show"
      >
        <div
          class="main"
          v-clickoutside="handleClose"
        >
          <button @click="quitTrms()">退出</button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
// 退出接口
import { removeloginInfo } from "@/utils/cache/userInfo";
import Http from "../api/api";
export default {
  data() {
    return {
      show: false,
    };
  },

  methods: {
    quitTrms() {
      // 退出之后清除登录信息
      removeloginInfo();
      Http.logout()
        .then((res) => {
          this.$router.push("/login");
        })
        .finally(() => {});
    },
    onMouseOver() {
      this.show = true;
    },
    onMouseOut() {
      this.show = false;
    },
    // 下拉菜单
    handleClose() {
      this.show = false;
    },
  },
  //    自定义指令clickoutside绑定了一个函数handleClose用来关闭菜单
  directives: {
    clickoutside: {
      bind: function (el, binding, vnode) {
        function documentHandler(e) {
          if (el.contains(e.target)) {
            return false;
          }
          if (binding.expression) {
            binding.value(e);
          }
        }
        el._vueClickOutside_ = documentHandler;
        document.addEventListener("click", documentHandler);
      },
      unbind: function (el, binding) {
        document.removeEventListener("click", el._vueClickOutside_);
        delete el._vueClickOutside_;
      },
    },
  },
};
</script>
<style lang="less" scoped>
// 作用是取消数据绑定时出现的代码闪烁
[v-cloak] {
  display: none;
}
table {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
  // 隐藏表格中空单元格上的边框和背景：
  empty-cells: show;
}
th,
td {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
th {
  background: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
  white-space: nowrap;
}
.menu {
  z-index: 100;
  // border: 1px solid #ccc;
  display: flex;
  width: 100px;
}
</style>
