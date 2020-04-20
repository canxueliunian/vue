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
      //普通形式的for循环
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].count * this.books[i].price;
      // }

      // for 方法第二种
      for (let i in this.books) {
        totalPrice += this.books[i].count * this.books[i].price;
      }

      // 直接进行拿元素的形式来进行循环. letof
      for (let book of this.books) {
        totalPrice += book.count * books.price;
      }

      //reduce:

      return totalPrice;

      //  高阶函数 filter map, redulce


    },
    // filter 函数, 返回布尔值
    com() {
      const nums = [11, 22, 44];
      let numsFilter = nums.filter(function (n) {
        if (n < 100) {
          return true;
        } else {
          return false;
        }
      }).map(function (n) {
        return n * 2;
      })


    }
  },
  //过滤器,
  filters: {
    showPrice(price) {
      return '$' + price.toFixed(2);
    }
  }
})
