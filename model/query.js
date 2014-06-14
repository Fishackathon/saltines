var db = require('./db.js');

module.exports = {
	getName: function(id, callback) {
		db.query('SELECT User_Name, NFC_ID, License_Type, Suspended FROM `fishackathon`.`user_data` WHERE NFC_ID = ' + id + ';', callback);
	}
	
	getBoat: function(id, callback) {
		db.query('SELECT name, owner FROM `fishackathon`.`ship_info` WHERE owner =' id ';', callback);
	}
	
	getFish: function(id, callback) {
		db.query('SELECT species, COUNT(*) FROM `fishackathon`.`fish_info` WHERE fish_info.fisherman =' id';', callback);
	}
	
	postUserInfo: function(name,phone,email,COO, callback) {
		db.query('INSERT INTO user_data (User_Name, Phone, Email, COO) VALUES ('name', 'phone', 'email', 'COO');', callback);
	}
	
	postBoatInfo: function(name, capacity, material, length, numMotors, callback) {
		db.query('INSERT INTO ship_info (name, capacity, material, length, num_motors) VALUES ('name', 'capacity', 'material', 'length', 'numMotors');', callback);
	}
}
