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
      return totalPrice;
    }
  },
  //过滤器,
  filters: {
    showPrice(price) {
      return '$' + price.toFixed(2);
    }
  }
})
