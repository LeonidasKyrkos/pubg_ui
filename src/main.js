// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from 'firebase';
import Vue from 'vue';
import App from './App';
import router from './router';
import config from './config';
import store from './store';

Vue.config.productionTip = false;

firebase.initializeApp(config);
const database = firebase.database();
const data = database.ref('game/');

data.once('value', (snapshot) => {
	store.init(snapshot.val());

	/* eslint-disable no-new */
	new Vue({
		el: '#app',
		router,
		template: '<App/>',
		components: { App },
	});
});
