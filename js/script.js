const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            emails: []
        }
    },
    created() {
        //For loop that runs 10 times
        for (let i = 0; i < 10; i++) {
            axios
            //Get the information, in this case get a random email
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
            //Response management 
                .then((resp) => {
                    //The email is added to the array
                    this.emails[i] = resp.data.response;
                });
        }
    }
}).mount("#app")