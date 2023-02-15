<script>
import localhost from '../localhost/localhost';

export default {
    components: {
        localhost
    },

    data() {
        return {
            user: [],
            email: "",
            password: "",
            name: "",
            surname: "",
            age: "",
            error: '',
        }
    },
    methods: {
        signUp() {

            let newEmail = {
                email: this.email,
                password: this.password,
                name: this.name,
                surname: this.surname,
                age: this.age,
            }

            console.log(newEmail);

            if (this.checkErrors(newEmail)) {
                fetch(localhost.BASE_URL + "/emails/regis", {
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newEmail)
                })
                    .then(() => this.$router.push('/auth'))
                    .catch(() => alert("err"));
            } else {
                console.log("err");
            }
        },


        checkData() {
            if (this.email === '' || this.password === '' || this.name === '' || this.surname === '' || this.age === '') {
                this.error = 'Fill in all the fields';
                return false;
            }
            return true;
        },

        validateEmail() {
            let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (reg.test(this.email) === false) {
                this.error = "Enter a valid email address";
                alert("Неверный e-mail адрес!");
                return false;
            }
            return true;
        },

        validatePassword() {
            let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
            if (reg.test(this.password) === false) {
                this.error = "Enter a strong password";
                alert("Пароль должен состоять из букв латинского алфавита (A-z), арабских цифр (0-9) и специальных символов");
                return false;
            }
            return true;
        },

        checkErrors() {
            if (this.checkData() && this.validateEmail() && this.validatePassword()) {
                return true;
            }
            return false;
        },
    }
}
</script>

<template>
    <div class="login">
        <b class="mt-20 reg-title">Регистрация</b>
        <input v-model="email" class="mt-20 input email-reg" type="email" placeholder="Электронная почта">
        <input v-model="password" class="mt-10 input password-reg" type="password" placeholder="Пароль">
        <input v-model="name" class="mt-10 input name-reg" type="text" placeholder="Имя">
        <input v-model="surname" class="mt-10 input surname-reg" type="text" placeholder="Фамилия">
        <input v-model="age" class="mt-10 input age-reg" type="number" placeholder="Возраст">

        <div>
            <button class="btn-reg mt-20" @click="signUp">Зарегистрироваться</button>
        </div>
    </div>
</template>

<style>

</style>
