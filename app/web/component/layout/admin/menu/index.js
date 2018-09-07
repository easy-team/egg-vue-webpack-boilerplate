const menu = {
  home: {
    name: '首页',
    path: '/',
    icon: 'fa fa-home',
  },
  content: {
    name: '内容管理',
    icon: 'fa fa-file',
    children: {
      list: {
        name: '文章管理',
        path: '/article/list'
      },
      add: {
        name: '添加文章',
        path: '/article/add'
      }
    }
  },
  learn: {
    name: '学习资料',
    icon: 'fa fa-file',
    children: {
      Egg: {
        name: 'Egg学习',
        path: '/'
      },
      Vue: {
        name: 'Vue学习',
        path: '/'
      },
      TypeScript: {
        name: 'TypeScript',
        path: '/'
      },
      EasyWebpack: {
        name: 'easywebpack',
        path: '/'
      }
    }
  }
};

export default menu;