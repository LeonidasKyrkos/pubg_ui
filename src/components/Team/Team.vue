<template>
	<div>
		<h1 class="alpha">Team UI</h1>
		<ul class="team-list">
			<li v-for="(player, index) of $root.store.game.team" :key="index">
				<div class="team-list__player">
					<player :player="player" :playerId="parseInt(index)"></player>
				</div>
			</li>
		</ul>
		<button class="btn--primary" @click="resetTeam()">Reset team</button>
	</div>
</template>

<script>
import { resetTeam } from '@/api';
import player from "../Player/Player";

export default {
	name: 'Team',
	components: {
		player,
	},
	methods: {
		resetTeam,
	},
};
</script>

<style lang="scss" scoped>
.team-list {
	display: flex;
	flex-flow: row wrap;
	margin: 0 -10px;

	> li {
		width: 50%;
	}

	&__player {
		margin: 0 10px 20px;
		background-color: #ececec;
		padding: 8px;
	}	
}
</style>
