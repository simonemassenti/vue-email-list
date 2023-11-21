const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            emails: []
        }
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    this.emails[i] = resp.data.response;
                });
        }
    }
}).mount("#app")