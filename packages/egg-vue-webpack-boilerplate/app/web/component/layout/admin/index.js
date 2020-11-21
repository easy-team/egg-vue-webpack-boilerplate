import Vue from 'vue';
import MainLayout from './main.vue';
import '../../../asset/css/global.css';
import './index.css';
import createLayout from '../layout';
const tpl = '<div class="admin" id="app" data-server-rendered="true"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>';
export default createLayout('Layout', { MainLayout }, tpl);
