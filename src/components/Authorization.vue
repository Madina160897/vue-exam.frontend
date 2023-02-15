<script>
import localhost from '../localhost/localhost';

export default {
    components: {
        localhost
    },
    
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

            fetch(localhost.BASE_URL + "/emails")
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

            <b class="reg-title">Авторизоваться</b>
            <input v-model="emailAuth" class="mt-20 input pOneEmail" type="email" placeholder="Электронная почта">
            <input v-model="passAuth" class="mt-10 input pOnePassword" type="password" placeholder="Пароль">
            <div class="reg mt-20">
                <router-link to="/regis">
                    <span>регистрация</span>
                </router-link>
            </div>
            <div>
                <button  @click="addEventListener" class="btn-reg btn-aut mt-10">Войти</button>
            </div>

        </div>
    </div>
</template>

<style>

</style>
