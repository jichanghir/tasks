import axios from 'axios';

const ADDR = 'http://di234.m9.ru.dcapi.net/uiproto/listgen.php';

export const ApiMock = {

};

export const ApiReal = {

    get_cfg() {
        return new Promise((resolve) => {
            axios.get(`${ADDR}?ui=get_cfg`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        });
    },

    get_list_names() {
        return new Promise((resolve) => {
            axios.get(`${ADDR}?ui=get_list_names`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        });
    },

    add_list({group, task_name, alias}) {
        return new Promise((resolve) => {
            axios.get(`${ADDR}?ui=add_list&group=${group}&task_name=${task_name}&alias=${alias}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        });
    },

    remove_list({group, task_name, alias}) {
        return new Promise((resolve) => {
            axios.get(`${ADDR}?ui=remove_list&group=${group}&task_name=${task_name}&alias=${alias}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        });
    },

    // get_cfg() {
    //     axios.post(`${ADDR}`, {
    //         ui : "get_cfg"
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // }

};
