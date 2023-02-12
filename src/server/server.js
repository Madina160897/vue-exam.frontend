import axios from "axios";

const apiServ = {
    HOST: 'http://localhost:8080',
};

const HOST = apiServ.HOST

class AuthService {
    async regis(user){
        return await axios.post(`${HOST}/emails/regis`, {...user})
        .then(res => {
            res.data;
        });
    }
    async login(user){
        return await axios.post(`${HOST}/emails/login`, {...user})
        .then(res => {
            localStorage.setItem('password', res.data.password);
            res.data;
        });
    }
}

export default AuthService;