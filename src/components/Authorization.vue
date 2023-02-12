<script>
const BASE_URL = "http://localhost:8080";

export default {
    data() {
        return {
            userAuth: [],
            emailAuth: "",
            passAuth: "",
        }
    },
    methods: {
        addEventListener() {

            let newEmailAuth = {
                email: this.emailAuth,
                password: this.passAuth,
            }

            console.log(newEmailAuth);

            fetch(BASE_URL + "/emails")
                .then(response => response.json())
                .then(user => localStorage.setItem('Users', JSON.stringify(user)))
                .catch(() => console.log(err));

            const users = JSON.parse(localStorage.getItem('Users'))

            for (let i = 0; i <= users.length - 1; i++) {
                if (newEmailAuth.email == users[i].email && newEmailAuth.password == users[i].password) {
                    localStorage.setItem('user', JSON.stringify(users[i]))

                    this.$router.push('/news')
                }
            }
        }
    }
}
</script>

<template>
    <div class="login-aut-box">

        <div class="login-aut mt-20">

            <b class="reg-title">Login</b>
            <input v-model="emailAuth" class="mt-20 input pOneEmail" type="email" placeholder="email">
            <input v-model="passAuth" class="mt-10 input pOnePassword" type="password" placeholder="password">
            <div class="reg mt-20">
                <router-link to="/regis">
                    <span>registration</span>
                </router-link>
            </div>
            <div>
                <button  @click="addEventListener" class="btn-reg btn-aut mt-10">login</button>
            </div>

        </div>
    </div>
</template>

<style>

</style>
