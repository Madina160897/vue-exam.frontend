<script>
const BASE_URL = "http://localhost:8080";

export default {
    data() {
        return {
            postsNew: JSON.parse(localStorage.getItem('Posts')),          
        }
    },
    mounted() {
        fetch(BASE_URL + "/post")
            .then(response => response.json())
            .then(data => localStorage.setItem('Posts', JSON.stringify(data)))
            .catch(() => console.log(err));
    },
    methods: {
        async likePost(postId) {
            await fetch(BASE_URL + `/post/like/${postId}`);
            loadData();
        },

        async unlikePost(postId) {
            await fetch(BASE_URL + `/post/unlike/${postId}`);
            loadData();
        }
    },
}
</script>

<template>
    <div class="fon-user">
        <header>
            <div class="head">
                <div class=" str icon-line">
                    <img class="acc" src="../img/free-icon-news-feed-4520862.png">
                    <span class="ml-5">Лента новостей</span>
                </div>
                <div class=" icon-line"> <img class="acc" src="../img/free-icon-users-5013404.png">
                    <router-link to="/users">
                        <span class="header-text ml-5">Список пользователей</span>
                    </router-link>
                </div>
                <div class="icon-line"> <img class="acc" src="../img/png-transparent-computer-icons-user-user-icon.png">
                    <router-link to="/person">
                        <span class="header-text ml-5">Личный кабинет</span>
                    </router-link>
                </div>
                <div class="more_div"></div>
                <button class="exit">Выйти</button>
            </div>
        </header>

        <main>
            <div class="posts_block">
                <div class="post-block-box" v-for="item in postsNew" v-key="item.id">
                    <div class="img-sn">
                        <div>
                            <img class="img-user" src="../img/png-transparent-computer-icons-user-user-icon.png">
                        </div>

                        <div class="name-sn">
                            <p> <b class="surname-user ml-5">{{ item.email }} </b> </p>
                            <p class="text_date"><i>{{ item.data }}</i></p>
                        </div>
                    </div>
                    <div class="post-like">
                        <h2 class="post-title">{{ item.title }}</h2>
                        <div class="post">{{ item.post }}</div>
                        <img class="post-img" :src="item.img"> <br>

                        <div>
                            <div>
                                <button @click="likePost('{{item._id}}')"> <img class="acc"
                                        src="../img/free-icon-thumb-up-3193028.png">
                                    {{ item.like }}</button>
                                <button @click="unlikePost('{{item._id}}')"><img class="acc" src="../img/dislike.png">
                                    {{ item.like }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style>

</style>
