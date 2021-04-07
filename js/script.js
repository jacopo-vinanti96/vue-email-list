const app = new Vue ({
  el: '#email-generator',
  data: {
    emailQuantity: 1,
    emailArr: [],
  },
  methods: {
    generateEmails() {
      this.emailArr = [];
      for (var i = 0; i < this.emailQuantity; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (obj) => {
          const email = obj.data;
          this.emailArr.push(email.response);
        });
      }
      console.log(this.emailArr);
    },
  }
})
