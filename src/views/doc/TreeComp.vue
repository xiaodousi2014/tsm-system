<template>
  <div>
    <div>
      <div class="custom-tree-container">
        <!-- <div class="block">
          <p>使用 render-content</p>
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
            :render-content="renderContent">
          </el-tree>
        </div> -->
        <div class="block">
          <p>使用 scoped slot</p>
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
          >
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>{{ node.label }}</span>
              <span v-if="data.edit">
                <el-input class="el-mini-input" v-model="data.label" />
                <el-button
                  class="el-mini-btn"
                  size="mini"
                  style="margin-left: 10px"
                  >确定</el-button
                >
                <el-button
                  class="el-mini-btn"
                  size="mini"
                  @click="() => edit(node, data, false)"
                  >取消</el-button
                >
              </span>
              <span>
                <el-button type="text" size="mini" @click="() => append(data)">
                  新增
                </el-button>
                <el-button
                  type="text"
                  size="mini"
                  @click="() => remove(node, data)"
                >
                  删除
                </el-button>
                <el-button
                  v-if="!data.edit"
                  type="text"
                  size="mini"
                  @click="() => edit(node, data, true)"
                >
                  编辑
                </el-button>
              </span>
            </span>
          </el-tree>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let id = 1000;

export default {
  name: "overview",
  components: {},
  data() {
    return {
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
    };
  },
  created() {},
  methods: {
    append(data) {
      const newChild = {
        id: id++,
        label: "testtest",
        children: [],
        edit: false,
      };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },
    edit(node, data, flag) {
      console.log(node, data);
      this.$set(data, "edit", flag);
      // data.edit = true
      // const parent = node.parent;
      // const children = parent.data.children || parent.data;
      // const index = children.findIndex(d => d.id === data.id);
      // children.splice(index, 1);
    },
  },
};
</script>
<style lang="less" scoped>
.type-sele {
  width: 120px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.el-mini-input {
  height: 25px;
  line-height: 25px;
  width: 120px;
  /deep/ .el-input__inner {
    height: 25px;
    line-height: 25px;
    padding: 0 10px;
  }
}
.el-mini-btn {
  padding: 5px 12px;
}
</style>
