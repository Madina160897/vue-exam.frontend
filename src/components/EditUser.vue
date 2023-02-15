<script>
import localhost from '../localhost/localhost'

export default {
    components: {
        localhost
    },

    data() {
        return {
            account: JSON.parse(localStorage.getItem('user')),
            accounts: JSON.parse(localStorage.getItem('Users')),
            surnamePers: '',
            namePers: '',
            agePers: '',
            isEditPerson: true,
        }
    },
    methods: {
        close1() {
            this.isEditPerson = false
        },
        save1() {

            if (this.namePers == "") {
                return;
            } else {
                this.account.name = this.name;
            }
            if (this.surnamePers == "") {
                return;
            } else {
                this.account.surname = this.surname;
            }
            if (this.agePers == "") {
                return;
            } else {
                this.account.age = this.age;
            }

            this.accounts = this.accounts.map((item) =>
                item.email == this.account.email ? this.account : item
            );

            localStorage.setItem("user", JSON.stringify(this.account));
            localStorage.setItem("Users", JSON.stringify(this.accounts));
            fetch(localhost.BASE_URL + `/emails/${this.account._id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(this.account),
            }).then(() => console.log("good"))
                .then(() => alert("Ok"))
                .catch(() => alert("err"))
            
            this.isEditPerson = false
        },
    }
}
</script>

<template>
    <div class="fon-user">
        <div class="fon-block" v-if="isEditPerson">
            <div class="block">
                <span>Имя:</span><br>
                <input v-model="namePers" class="input" type="text"><br>
                <span>Фамилия:</span><br>
                <input v-model="surnamePers" class="input" type="text"><br>
                <span>Возраст:</span><br>
                <input v-model="agePers" class="input" type="number"><br>
                <button @click="save1()" class="exit">Сохранить</button><br>
                <button @click="close1()" class="exit">Отмена</button>
            </div>
        </div>
    </div>
</template>

<style>

</style>
