import Vue from 'vue';
import MainLayout from './main.vue';
import '../../../asset/css/bootstrap.css';
import '../../../asset/css/blog.css';
import createLayout from '../layout';
const tpl = '<div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>';
export default createLayout('Layout', { MainLayout }, tpl);
