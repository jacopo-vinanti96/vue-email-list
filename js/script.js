const app = new Vue ({
  el: '#email-generator',
  data: {
    emailQuantity: 1,
    emailArr: [],
    btnDisable: '',
  },
  methods: {
    generateEmails() {
      this.emailArr = [];
      this.btnDisable = 'disabled';
      for (var i = 0; i < this.emailQuantity; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (obj) => {
          const email = obj.data;
          this.emailArr.push(email.response);
          if ( this.emailArr.length == this.emailQuantity ) {
            this.btnDisable = '';
          }
        });
      }
    },
  }
})
