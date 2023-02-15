<script >
import localhost from '../localhost/localhost'

export default {
    components() {
        localhost
    },

    data() {
        return {
            account: JSON.parse(localStorage.getItem('user')),
            accounts: JSON.parse(localStorage.getItem('Users')),
            surnamePers: '',
            namePers: '',
            agePers: '',
            imgPers: "",
            isEditPerson: false,
            titleP: "",
            postP: "",
            imgP: "",
            posts: [],
            postsUs: [],
            titlePost: "",
            postPost: "",
            imgPost: "",
            isEditPost: false
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
                this.account.name = this.namePers;
            }
            if (this.surnamePers == "") {
                return;
            } else {
                this.account.surname = this.surnamePers;
            }
            if (this.agePers == "") {
                return;
            } else {
                this.account.age = this.agePers;
            }
            if (this.imgPers == "") {
                return;
            } else {
                this.account.img = this.imgPers;
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
                // .then(() => alert("Изменен"))
                .catch(() => alert("err"))

            this.namePers = ''
            this.surnamePers = ''
            this.agePers = ''
            this.imgPers = ''

            this.isEditPerson = false
        },

        editPro() {
            this.isEditPerson = true
        },

        addPost() {
            let payload = {
                email: this.account.email,
                title: this.titleP,
                post: this.postP,
                img: this.imgP,
            };

            fetch(localhost.BASE_URL + "/post", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "post",
                body: JSON.stringify(payload),
            })
                // .then(() => alert("Пост добавлен!"))
                .then(() => console.log("Добавлен"))
                .catch(() => alert("err"));
            fetch(localhost.BASE_URL + "/post")
                .then((response) => response.json())
                .then((result) => {
                    localStorage.setItem("Posts", JSON.stringify(result));
                });

            this.titleP = "";
            this.postP = "";
            this.imgP = "";
        },

        newFunc() {
            fetch(localhost.BASE_URL + "/post")
                .then((response) => response.json())
                .then((result) => {
                    this.posts = result;
                    this.postsUs = this.posts.filter(
                        (item) => item.email == this.account.email
                    );
                })
                .catch(() => console.log(err));
        },

        deletePost(id) {
            fetch(localhost.BASE_URL + "/post/" + id, { method: "DELETE" })
                .then(() => alert("Пост удален"))
                .catch(() => alert("err"));
        },

        changePost(id) {
            this.isEditPost = true
            localStorage.setItem("idChangePost", id)
        },

        saveNewPost () {
            let id = localStorage.getItem("idChangePost")
            let payload = {
                title: this.titlePost,
                post: this.postPost,
                img: this.imgPost,
            };

            fetch(localhost.BASE_URL + "/post/" + id, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(payload)
            }).then(() => console.log("good"))
                // .then(() => alert("Пост изменен"))
                .catch(() => alert("err"))

            this.titlePost = "";
            this.postPost = "";
            this.imgPost = "";
            this.isEditPost = false
        },

        cancelBtn() {
            this.isEditPost = false
        },

        logOut() {
            localStorage.removeItem("user")
            this.$router.push('/auth')
        }
    },
    created() {
        this.newFunc();
    },
    updated() {
        this.newFunc();
    },
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
                <button class="exit" @click="logOut">Выйти</button>
            </div>
        </header>

        <main>

            <div class="pors_block">
                <div class="area-info">
                    <img class="per-img" :src="account.img" >
                    <div class="per-info">
                        <div>
                            <div class=" df block-name">
                                <b class="user-info"> {{ account.surname }}</b>
                                <b class="user-info"> {{ account.name }}</b>
                            </div>
                            <p> Возраст: {{ account.age }} </p>
                        </div>
                        <button class="btn-red-info" @click="editPro()">Редактировать данные</button>
                    </div>
                </div>
            </div>
            <div class="fon-block" v-show="isEditPerson">
                <div class="block">
                    <span>Имя:</span><br>
                    <input v-model="namePers" class="input" type="text"><br>
                    <span>Фамилия:</span><br>
                    <input v-model="surnamePers" class="input" type="text"><br>
                    <span>Возраст:</span><br>
                    <input v-model="agePers" class="input" type="number"><br>
                    <span>Аватар:</span><br>
                    <input v-model="imgPers" class="input" type="text"><br>
                    <button @click="save1()" class="exit">Сохранить</button><br>
                    <button @click="close1()" class="exit">Отмена</button>
                </div>
            </div>

            <div class="news-post-info">
                <div class="new-post">
                    <p>Заголовок</p>
                    <input v-model="titleP" type="text" name="" id="post-title" class="input">
                    <p>Пост</p>
                    <textarea v-model="postP" name="" class="post-text textarea" cols="20" rows="5"></textarea>
                    <p>Картинка</p>
                    <textarea v-model="imgP" class="post-img-new input" type="text" placeholder="URL-ссылка"></textarea>
                    <div class="mt-10">
                        <button class="btn-red" @click="addPost">Сохранить</button>
                    </div>
                </div>
            </div>

            <div class="posts_block">
                <div class="post-block-box" v-for="post in postsUs" :key="post._id">

                    <div class="img-sn">

                        <div>
                            <img class="img-user" src="../img/png-transparent-computer-icons-user-user-icon.png">
                        </div>

                        <div class="name-sn">
                            <b class="surname-user ml-5"> {{ post.email }} </b>
                        </div>
                    </div>
                    <div class="post-like">
                        <h2 class="post-title"> {{ post.title }}</h2>
                        <div class="post"> {{ post.post }}</div>
                        <img class="post-img" :src="post.img"> <br>
                        <div>
                            <div>
                                <button class="btn-like"> <img class="acc" src="../img/free-icon-thumb-up-3193028.png">
                                    {{ post.like }} </button> <br>
                            </div>
                        </div>

                        <button class="btn-red" @click="changePost(post._id)">Редоктировать</button>
                        <button class="btn-red" @click="deletePost(post._id)">Удалить</button>
                    </div>
                </div>
                <div class="back-block2" v-show="isEditPost">
                    <div class="edit-data2">
                        <p>Заголовок</p>
                        <input v-model="titlePost" id="edTitle" type="text" class="input">
                        <p>Пост</p>
                        <textarea v-model="postPost" class="textarea" id="edPost" cols="20" rows="5"></textarea>
                        <p>Картинка</p>
                        <input v-model="imgPost" id="edImg" type="text" class="input" placeholder="URL-ссылка">
                        <div class="btn-box">
                            <button @click="saveNewPost" class="exit mt-20">Сохранить</button>
                            <button @click="cancelBtn" class="exit mt-20">Отмена</button>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    </div>
</template>

<style>

</style>
