const { createApp } = Vue;

createApp({
  data() {
    return {
      arrayRandomMail: [],
    };
  },

  methods: {
    GenerateMailRandom() {
      this.arrayRandomMail = [];
      for (let index = 0; index < 10; index++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((mail) => {
            const result = mail.data.response;
            this.arrayRandomMail.push(result);
          });
      }
    },
  },
}).mount("#app");
