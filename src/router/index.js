import Vue from 'vue';
import Router from 'vue-router';
import Team from '@/components/Team/Team';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Team',
			component: Team,
		},
	],
});
