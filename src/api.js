import firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

export const database = firebase.database();

export const updatePlayer = (playerId, data) => {
	console.log(playerId, data);
};

export const setPlayerOutfitValue = (playerId, { key, value }) => {
	database.ref(`game/team/${playerId}/outfit/${key}`).set(value);
};

export const switchPlayerWeapon = (playerId, { slot, weapon }) => {
	database.ref(`game/team/${playerId}/weaponry/${slot}/`).set(weapon);
};

export const changePlayerName = (playerId, name) => {
	database.ref(`game/team/${playerId}/name`).set(name);
};

export const setEndpoint = (endpoint, value) => {
	database.ref(endpoint).set(value);
};

export const resetTeam = () => {
	database.ref('archetypes/').once('value', (snapshot) => {
		const data = snapshot.val();

		database.ref(`game/team`).set(data.team);
	});
};