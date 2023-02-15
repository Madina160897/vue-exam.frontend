<script>
import localhost from '../localhost/localhost';

export default {
    components: {
        localhost
    },

    data() {
        return {
            usersNew: JSON.parse(localStorage.getItem('user')),
            allUsers: []
        }
    },
    methods: {
        async postData(route, payload) {
            await fetch( localhost.BASE_URL + route, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: payload
                },
            )
                .then(() => console.log("parsed"))
                .catch(() => console.log("Error sending request"));
        },

        followAd (followedUserId) {

            const payload = {
                userId: this.usersNew._id,
                followedUserId: followedUserId
            }
            const jsonPayload = JSON.stringify(payload);
            this.postData("/emails/follow", jsonPayload);
            this.usersNew.follows.push(followedUserId)
            localStorage.setItem("user", JSON.stringify(this.usersNew))
        },

        unFollowAuthor (followedUserId) {

            const payload = {
                userId: this.usersNew._id,
                followedUserId: followedUserId
            }
            const jsonPayload = JSON.stringify(payload);
            this.postData("/emails/unfollow", jsonPayload);
            this.usersNew.follows = this.usersNew.follows.filter((id) => id != followedUserId)
            localStorage.setItem("user", JSON.stringify(this.usersNew))
        },

        logOut() {
            localStorage.removeItem("user")
            this.$router.push('/auth')
        }
    },
    created() {
    let users = JSON.parse(localStorage.getItem("Users"));
    this.allUsers = users.filter((item) => item._id !== this.usersNew._id);
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
                <div class="str icon-line"> <img class="acc" src="../img/free-icon-users-5013404.png"> <span
                        class="ml-5">Список пользователей</span> </div>
                <div class="icon-line"> <img class="acc" src="../img/png-transparent-computer-icons-user-user-icon.png">
                    <router-link to="/person">
                        <span class="header-text ml-5">Личный кабинет</span>
                    </router-link>
                </div>
                <div class="more_div"></div>
                <button class="exit" @click="logOut">Выйти</button>
            </div>
        </header>

        <main>

            <div class="users_block">
                <div class="table-user" v-for="usr in allUsers" v-key="usr._id">

                    <div class="img-sn">

                        <div>
                            <img class="img-user" src="../img/png-transparent-computer-icons-user-user-icon.png">
                        </div>

                        <div class="name-sn">
                            <b class="surname-user ml-5"> {{ usr.surname }} </b> <b class="name-user ml-5"> {{
                                usr.name
                            }}
                            </b>
                        </div>
                    </div>

                    <div class="btn-user">
                        <button  v-if="this.usersNew.follows.includes(usr._id)" @click="unFollowAuthor(usr._id)"
                        class="btn-reg-unfollow">
                            Отписаться
                        </button>
                        <button v-else @click="followAd(usr._id)" class="btn-reg-follow">
                            Подписаться
                        </button>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<style>

</style>
