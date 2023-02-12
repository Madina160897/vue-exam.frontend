<script>
const BASE_URL = "http://localhost:8080";

export default {
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

            if (newEmail) {
                fetch(BASE_URL + "/emails/regis", {
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

        // checkDate(newEmail) {
        //     if (!validateEmail(newEmail.email)) {
        //         alert("Incorrect email!")
        //         return false
        //     } if (!validatePassword(newEmail.password)) {
        //         alert("Incorrect password!")
        //         return false
        //     } if (!validateAge(newEmail.age)) {
        //         alert("Incorrect age!")
        //         return false
        //     } else if (newEmail.name.length < 1 || newEmail.surname.length < 1 || newEmail.password.length < 1 || newEmail.age.length < 1) {
        //         alert("Complete all data!")
        //         return false;
        //     } else {
        //         return true
        //     }
        // },

        // checkData() {
        //     if (this.email === '' || this.password === '' || this.name === '' || this.surname === '' || this.age === '') {
        //         this.error = 'Fill in all the fields';
        //         return false;
        //     }
        //     return true;
        // },

    //     validateEmail(email) {
    //         return String(email)
    //             .toLowerCase()
    //             .match(
    //                 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //             );
    //     },

    //     validatePassword(password) {
    //         return String(password)
    //             .match(
    //                 /^\S*(?=.*[A-Z])(?=.*[0-9])(?=.*[/$!*])[a-zA-Z0-9*/$!]{8,}\S*$/g
    //             );
    //     },

    //     validateAge(age) {
    //         return String(age)
    //             .match(
    //                 /^[1-9][0-9]$|^[1-9]$|^100$/
    //             );
    //     },
    }
}
</script>

<template>
    <div class="login">
        <b class="mt-20 reg-title">Registration</b>
        <input v-model="email" class="mt-20 input email-reg" type="email" placeholder="email">
        <input v-model="password" class="mt-10 input password-reg" type="password" placeholder="password">
        <input v-model="name" class="mt-10 input name-reg" type="text" placeholder="name">
        <input v-model="surname" class="mt-10 input surname-reg" type="text" placeholder="surname">
        <input v-model="age" class="mt-10 input age-reg" type="number" placeholder="age">

        <div>
            <button class="btn-reg mt-20" @click="signUp">Sign up</button>
        </div>
    </div>
</template>

<style>

</style>
