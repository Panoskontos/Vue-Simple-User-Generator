console.log("hello")

const app = Vue.createApp({
    data() {
        return {
          message: 'Hello Vue!',
          fname:'panos',
          lname:'c++',
          email:'panos96el@gmail.com',
          gender:'male',
          picture: 'https://randomuser.me/api/portraits/men/1.jpg'

        }
    },

    methods: {
        async getUser(){
            // API Call
            const res = await fetch('https://randomuser.me/api/')
            const { results } = await res.json()

            // to access the data you have to use this
            this.fname =results[0].name.first,
            this.lname =results[0].name.last,
            this.email =results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        },
    }
})

// mount it to id 
app.mount('#app')