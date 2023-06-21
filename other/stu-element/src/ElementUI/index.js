import ElButton from './ElButton';
import ElButtonGroup from './ElButtonGroup';
import { Message } from './ElMessage';

export default {
  install(Vue) {
    Vue.component('ElButton', ElButton);
    Vue.component('ElButtonGroup', ElButtonGroup);
    Vue.prototype.$message = Message;
  },
};
