const {add} = require('./js/mathUtil')
console.log(add(100, 200));

// 通过ES6的方式来进行导入
import {myage, myname} from "./js/info.js";

console.log(myage);
console.log(myname);

// 依赖css的文件
require('./css/normal.css')
require('./css/special.less')
document.writeln("this is a test")

//先进行引用vue
import Vue from 'vue'

const app = new Vue(
  {
    el: '#app',
    data: {
      'message':'hello vue'
    },
    methods: {}
  }
)

