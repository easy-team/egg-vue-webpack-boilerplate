<template>
  <Layout description="vue server side render" keywords="egg, vue, webpack, server side render">
    <!--<div v-for="item in list">-->
      <!--{{item.title}}-->
    <!--</div>-->
    <!--el-table有bug, 服务器渲染出来数据是空的,用简单的模板结果是可以出来-->
    <p></p>
    <el-table :data="list " border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column label="ID" width="80">
        <template scope="scope">
          <span style="margin-left: 10px" v-text="scope.row.id"></span>
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template scope="scope">
          <span style="margin-left: 10px"><a :href="scope.row.url" target="_blank">{{ scope.row.title }}</a></span>
        </template>
      </el-table-column>
      <el-table-column label="简介">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">

            <p>{{ scope.row.summary }}</p>

            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.title }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block" style="text-align: right; margin-top: 16px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[10, 15, 20, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </Layout>
</template>
<style>
  @import "front.css";
</style>
<script type="text/babel">
  export default {
    components: {

    },
    data(){
      return {
        total: 0,
        list:[],
        pageIndex: 1,
        pageSize: 10
      }
    },
    computed: {

    },
    methods: {
      fetch(){
        this.$http.get(`${location.origin}/pager?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(res=> {
          console.log('res', res);
          this.total = res.data.total;
          this.list = res.data.list;
        });
      },
      handleSelectionChange(val){
        console.log('handleSelectionChange', val);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.fetch();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageIndex = val;
        this.fetch();
      },
      handleEdit(index, row) {
        this.$message(`你点击了编辑操作 index:${index}, id:${row.id}`);
      },
      handleDelete(index, row) {
        this.$message(`你点击了删除操作 index:${index}, id:${row.id}`);
      }
    },
    mounted() {
      this.fetch();
    }
  }
</script>

