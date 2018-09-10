<template>
  <div>
    <div class="search">
      <el-row class="clear">
            <el-input class="long-input" clearable v-model="article.title" placeholder="文章标题"></el-input>
            <el-button class="add-button" type="success" icon="el-icon-document" @click="submit(1)">提交</el-button>
            <el-button class="add-button" type="primary" icon="el-icon-document" @click="submit(0)">草稿</el-button>
      </el-row>
      <el-row class="clear top16">
        <el-input class="long-input" clearable v-model="article.tag" placeholder="标签,多个用空格隔开"></el-input>
      </el-row>
    </div>
    <div class="editor-container" v-if="isShowEditor">
      <markdown-editor id="contentEditor" ref="contentEditor" v-model="article.content" :height="500" :zIndex="20"></markdown-editor>
    </div>
  </div>
</template>
<style>
.editor-container {
  width: 100%;
}
</style>
<script type="babel">
import { SET_SAVE_ARTICLE } from '../../store/app/mutation-type';
export default {
  components: {
    MarkdownEditor: () => import("component/MarkdownEditor/index.vue")
  },
  data() {
    return {
      article: {
        content: "Markdown Write",
        html: "",
        title: "",
        tag: ""
      },
      isShowEditor: false
    };
  },
  computed: {},
  methods: {
     markdown2Html() {
      import('showdown').then(showdown => {
        const converter = new showdown.Converter()
        this.article.html = converter.makeHtml(this.content)
      })
    },
    submit(status) {
       this.article.status = status;
       this.$store.dispatch(SET_SAVE_ARTICLE, this.article);
       this.$message(`添加成功`);
    }
  },
  mounted() {
    this.isShowEditor = true;
  }
};
</script>