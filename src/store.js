import { database } from './api';

class Store {
	init(data) {
		this.data = {};
		this.updateStore(data);

		database.ref('/').on('value', (snapshot) => {
			this.updateStore(snapshot.val());
		});
	}

	updateStore(data) {
		Object.assign(this.data, data);
	}
}

export default new Store();