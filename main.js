const { createApp } = Vue;

createApp({
  data() {
    return {
      randomMail: "",
    };
  },

  mounted() {
    for (let index = 0; index < 10; index++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function (mail) {
          const result = mail.data.response;
          this.randomMail = result;
          console.log(result);
        });
    }
  },
}).mount("#app");
