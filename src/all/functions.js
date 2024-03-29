import api from '../services/api.js';
async function verify_login() {
    var x = true;
    var user = JSON.parse(localStorage.getItem('user_infos'));
    if(user === null || !user) {
        x = false;
    } else {
        var infos = await api.post("/is", { username: user.username });
        if(infos.data.error === true) {
            localStorage.clear();
            x = false;
        } else {
            var test = await api.post("/veriencripty", { username: user.username, password: user.password });
            if(test.data.result === false) {
                localStorage.clear();
                x = false;
            }
        }
    }
    return x;
}
async function verify_staff() {
    var user = JSON.parse(localStorage.getItem("user_infos"));
    var staff = await api.post("/is", { username: user.username });
    var x = false;
    if(staff.data.returno.level > 0) {
        x = true;
    }
    return x;
}
async function getUser() {
    const user = JSON.parse(localStorage.getItem("user_infos"));
    return user;
}
async function getImage() {
    var user = await getUser();
    var userInfos = await api.post('/searchuser', { user_id: user.user_id });
    return userInfos.data.image;
}
export { verify_staff, verify_login, getUser, getImage };