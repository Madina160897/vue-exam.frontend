<script >
const BASE_URL = "http://localhost:8080";

export default {
    data() {
        return {
            accounts: JSON.parse(localStorage.getItem('user')),
            usersPrson: [],
            isEdit: false,
            surnamePers: '',
            namePers: '',
            agePers: '',
            isEdit: false,
            disNone: true,
        }
    },
    methods:{
        editPro(id){
            this.editId = id
            this.isEdit = true
            this.disNone = false
        }
    }
}
</script>

<template>
    <div class="fon-user">
        <header>
            <div class="head">
                <div class="icon-line"> <img class="acc" src="../img/free-icon-news-feed-4520862.png">
                    <router-link to="/news">
                        <span class="header-text ml-5">Лента новостей</span>
                    </router-link>
                </div>
                <div class=" icon-line"> <img class="acc" src="../img/free-icon-users-5013404.png">
                    <router-link to="/users">
                        <span class="header-text ml-5">Список пользователей</span>
                    </router-link>
                </div>
                <div class=" str icon-line"> <img class="acc"
                        src="../img/png-transparent-computer-icons-user-user-icon.png">
                    <span class="ml-5">Личный кабинет</span>
                </div>
                <div class="more_div"></div>
                <button class="exit">Выйти</button>
            </div>
        </header>

        <main>

            <div class="pors_block" >
                <div class="area-info" >
                    <img class="per-img"  src="../img/png-transparent-computer-icons-user-user-icon.png">
                    <div class="per-info" >
                        <div >
                            <b class="user-info"> {{ accounts.surname }}</b> 
                            <b class="user-info"> {{ accounts.name }}</b>
                            <p> Возраст: {{ accounts.age }} </p>
                        </div>
                        <button class="btn-red-info" @click="editPro(usersPrson.id)">Pедактировать данные</button>
                    </div>
                </div>
                <div class="fon-block" v-if="isEdit">
                    <div class="block">
                        <span>Name:</span><br>
                        <input v-model="namePers" type="text"><br>
                        <span>Surname:</span><br>
                        <input v-model="surnamePers" class="newSurname" type="text"><br>
                        <span>Age:</span><br>
                        <input v-model="agePers" class="newAge" type="text"><br>
                        <button onclick="save1()">Save</button><br>
                        <button onclick="close1()">Close</button>
                    </div>
                </div>
            </div>

            <div class="news-post-info">
                <div class="new-post">
                    <p>Заголовок</p>
                    <input type="text" name="" id="post-title">
                    <p>Пост</p>
                    <textarea name="" class="post-text" cols="20" rows="5"></textarea>
                    <p>Картинка</p>
                    <textarea class="post-img-new" type="text" placeholder="URL-ссылка"></textarea>
                    <div class="mt-10">
                        <button class="btn-red" onclick="addPost()">Сохранить</button>
                    </div>
                </div>
            </div>

            <div class="posts_block">

            </div>

            <div class="back-block2">
                <div class="edit-data2">
                    <p>Заголовок</p>
                    <input id="edTitle" type="text">
                    <p>Пост</p>
                    <textarea name="" id="edPost" cols="20" rows="5"></textarea>
                    <p>Картинка</p>
                    <textarea id="edImg" type="text" placeholder="URL-ссылка"></textarea>
                    <button onclick="saveNewPost()" class="btn mt-20">Сохранить</button>
                    <button onclick="cancelBtn()" class="btn mt-20">Отмена</button>
                </div>
            </div>
        </main>
    </div>
</template>

<style>

</style>
