import Vue from 'vue';
import MainLayout from './main.vue';
import '../../../asset/css/bootstrap.css';
import '../../../asset/css/blog.css';
import createLayout from '../layout';
export default createLayout('Layout', { MainLayout }, '<div id="app" data-server-rendered="true"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>');
