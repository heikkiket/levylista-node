import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
    modules: {
    },
    state: {
        apiUrl: 'http://localhost:8081/api/',
        frontUrl: 'https://localhost:8080',
        albums: [],
        artists: [],
        singleAlbum: {}
    },
    mutations: {
        setAlbums(state, payload) {
            state.albums = payload;
        },
        setSingleAlbum(state, payload) {
            state.singleAlbum = payload;
        }
    },
    actions: {
        getAlbums({state, commit}) {
            let endpoint = "albums";
            let url = state.apiUrl + endpoint;
            let headers = new Headers();
            headers.append('Origin', '');
            fetch(url, {Headers: headers}).
                then((response) => {
                    return response.json();
                }).then((response) => {
                    commit('setAlbums', response);
                });
        },
        getSingleAlbum({state, commit}, albumId) {
            let endpoint = "albums/" + albumId;
            let url = state.apiUrl + endpoint;
            let headers = new Headers();
            headers.append('Origin', '');
            fetch(url, {Headers: headers}).
                then((response) => {
                    return response.json();
                }).then((response) => {
                    commit('setSingleAlbum', response);
                });
        }
    }
});

export default store;
