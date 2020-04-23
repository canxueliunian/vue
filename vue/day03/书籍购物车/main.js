const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 2,
        name: '小王子',
        date: '2020-02-12',
        price: 12,
        count: 2
      }
    ]

  },
  methods: {
    decrement(index) {
      let count = this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
// 删除书籍
    removeBtn(index) {
      // 移除元素使用spice方法
      this.books.splice(index, 1);
    }

  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].count * this.books[i].price;
      }
      // return totalPrice;


      return this.books.reduce((book,n)=>book.count*book.price);
    },




    //  reduce的使用, 对数组里的所有内容进行汇总

    total() {
      let newNum = [100, 200, 344, 5666];
      // 参数1是一个方法preValue是拿到上一次的返回值,value
      // 是这次的循环值, 所以可以用这个来进行累加操作, 其中第二个的值是第一次的prevalue的默认值.
      newNum.reduce(function (preValue, value) {
        return preValue + value;
      }, 0);

      //filter , map , reduce的高阶函数.
      // 是使用lanmda的剪头函数来进行替代function
      newNum.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);


    }

  },
  //过滤器,
  filters: {
    showPrice(price) {
      return '$' + price.toFixed(2);
    }
  }
})
