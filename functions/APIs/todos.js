const { admin, db } = require('../util/admin');
const { object } = require('firebase-functions/lib/providers/storage');

exports.getAllTodos = (request, response) => {
    console.log('Hello1');
	db
        .collection('words')
        .doc('nouns')
        // .update({body: admin.firestore.FieldValue.arrayUnion('greater_virginia')})
		.get()
		// .then((data) => {
		// 	let todos = [];
		// 	data.forEach((doc) => {
		// 		todos.push({
        //             todoId: doc.id,
        //             title: doc.data().title,
		// 			body: doc.data().body,
		// 			createdAt: doc.data().createdAt,
		// 		});
		// 	});
		// 	return response.json(data.data().body);
		// })
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
            return response.sendStatus(200)
        })
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};
