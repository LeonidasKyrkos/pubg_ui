// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { database } from './api';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

database.ref('/').once('value', (snapshot) => {
	store.init(snapshot.val());

	/* eslint-disable no-new */
	new Vue({
		el: '#app',
		router,
		template: '<App/>',
		components: { App },
		data() {
			return {
				store: store.data,
			};
		},
	});
});
