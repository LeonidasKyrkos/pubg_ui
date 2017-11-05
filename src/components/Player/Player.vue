<template>
	<div>
		<input class="player__name" :placeholder="`Player ${playerId + 1}`" type="text" :value="player.name" @input="changePlayerName($event)" />
		<ol class="player">
			<li v-for="(value, key) in player.outfit" :key="key">
				<div :class="`player__item--outfit level${value}`">
					<span class="player__item-name">{{ key }}</span>
					<span class="player__item-value">
						{{ value }} 
						<button @click="decrementOutfitValue({ key, value })">-</button>
						<button @click="incrementOutfitValue({ key, value })">+</button>
					</span>
				</div>		
			</li>
			<li v-for="(weapon, key) in player.weaponry" :key="key">
				<div class="player__item">
					<h5 class="epsilon">{{key}} weapon:</h5>
					<select class="player__select" @change="switchWeapon(key, $event)">
						<option :selected="weapon.type === 0 ? 'selected' : false" value="0">No {{key}} weapon</option>
						<option v-for="(item, name) in $root.store.items.weapons"
								:selected="weapon.type === name ? 'selected' : false" 
								:key="name"
								:value="name"
						>{{name}}</option>
					</select>
					<ol class="player__item" v-if="weapon.attachments">
						<li class="player__attachment" v-for="(attachment, name) in weapon.attachments" :key="name">
							<div class="player__item">
								<span class="player__item-name">{{ name }}</span>
								<span class="player__item-value">{{ attachment }}</span>
							</div>
						</li>
					</ol>				
				</div>
			</li>
		</ol>
	</div>	
</template>

<script>
import { updatePlayer, setPlayerOutfitValue, switchPlayerWeapon, changePlayerName } from "@/api";

export default {
	name: 'player',
	props: {
		playerId: {
			type: Number,
			required: true,
		},
		player: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			outfit: this.player.outfit,
			weaponry: this.player.weaponry,
		};
	},
	methods: {
		renderItemDetails(item) {
			return typeof item === 'number' ? item : item.type;
		},
		updatePlayer(item, value) {
			updatePlayer(this.playerId, { item, value });
		},
		incrementOutfitValue({ key, value }) {
			if (value < 3) {
				setPlayerOutfitValue(this.playerId, { key, value: value + 1 });
			}
		},
		decrementOutfitValue({ key, value }) {
			if (value > 0) {
				setPlayerOutfitValue(this.playerId, { key, value: value - 1 });
			}
		},
		switchWeapon(slot, $event) {
			const weaponName = $event.target.value;
			const weapon = this.$root.store.items.weapons[weaponName];
			// const newWeapon = weapon ?
			// 				{ type: weaponName, attachments: weapon.attachments } :
			// 				{ type: 0 };

			// for now we'll just update the type
			const newWeapon = weapon ?
							{ type: weaponName } :
							{ type: 0 };

			switchPlayerWeapon(this.playerId, { slot, weapon: newWeapon });
		},
		changePlayerName($event) {
			changePlayerName(this.playerId, $event.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
$module: 'player';

.#{$module} {
	&__attachment {
		width: 100%;
	}

	&__item {
		display: flex;
		flex-flow: row wrap;
		width: 100%;
		align-items: center;
		padding: 5px;
	}

	&__item--outfit {
		@extend .#{$module}__item;
		background-color: firebrick;
		color: white;

		&.level1 {
			background-color: saddlebrown;
		}

		&.level2 {
			background-color: darken(gold, 15%);
		}

		&.level3 {
			background-color: forestgreen;
		}
	}

	&__item-value {
		margin-left: auto;
		display: flex;
		align-items: center;

		> * {
			margin: 0 0 0 4px;
		}
	}

	&__select {
		width: 100%;
	}

	&__name {
		width: 100%;
		margin-bottom: 10px;
		line-height: 1.5;
		padding: 3px;
	}
}
</style>
