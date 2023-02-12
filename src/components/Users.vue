<script >
export default {
    data() {
        return {
            usersNew: JSON.parse(localStorage.getItem('Users')),          
        }
    },
    methods: {
        
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
                <div class="str icon-line"> <img class="acc" src="../img/free-icon-users-5013404.png"> <span
                        class="ml-5">Список пользователей</span> </div>
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

            <div class="users_block" >
                <div class="table-user" v-for="usr in usersNew" v-key="usr.id">

                    <div class="img-sn">

                        <div>
                            <img class="img-user" src="../img/png-transparent-computer-icons-user-user-icon.png">
                        </div>

                        <div class="name-sn">
                            <b class="surname-user ml-5"> {{ usr.surname }} </b> <b class="name-user ml-5"> {{ usr.name }}
                            </b>
                        </div>
                    </div>

                    <div class="btn-user">
                        <button class="btn-reg"> Подписаться </button>
                        <button class="btn-reg"> Отписаться </button>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<style>

</style>
