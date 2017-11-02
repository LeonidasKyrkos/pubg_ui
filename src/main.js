// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from 'firebase';
import Vue from 'vue';
import App from './App';
import router from './router';
import config from './config';

firebase.initializeApp(config);

const database = firebase.database();

const data = database.ref('game/');
let json;

data.once('value', (snapshot) => {
	json = snapshot.val();
	console.log(json);
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
});
