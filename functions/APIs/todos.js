const { admin, db } = require('../util/admin');
const { object } = require('firebase-functions/lib/providers/storage');

exports.getWords = (request, response) => {
	db
        .collection('words')
        .doc(request.body.wordType)
		.get()
		.then((data) => {
			return response.json(data.data().body);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};


exports.addWords = (request, response) => {
	db
        .collection('words')
        .doc(request.body.wordType)
        .update({body: admin.firestore.FieldValue.arrayUnion(...request.body.words.split(','))})
        .then(() => {   
            return response.json(request.body.words.split(','))
        })
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};
