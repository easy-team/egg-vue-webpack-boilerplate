import '../../asset/css/global.css';
import createLayout from './layout';
const tpl = '<div><slot></slot></div>';
export default createLayout('Layout', { }, tpl);