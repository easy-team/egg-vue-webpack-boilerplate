
const Vue = require('vue');

Vue.component('item', {
  template: [
    '<li>',
    '<strong>{{header | fancyfy}}</strong>',
    '</li>'
  ].join(''),
  props: {
    model: Object
  },
  data() {
    return {
      isVisible: false
    };
  },
  computed: {
    header() {
      let postfix;
      if (this.model.first) {
        postfix = ' is FIRST';
      } else {
        postfix = ' is LAST';
      }
      return this.model.name + postfix;
    }
  },

  filters: {
    fancyfy(value) {
      return '--=' + value + '=--';
    }
  }
});

module.exports = new Vue({
  template: [
    '<ul>',
    '<item v-for="item in model" :model="item"><item>',
    '</ul>'
  ].join(''),
  data: {
    model: [
      {
        first: true,
        name: 'White'
      },
      {
        first: false,
        name: 'Horse'
      }
    ]
  }
});
