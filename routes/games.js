const { Router } = require('express');
let { db } = require('../firebase')

let router = new Router();

//GET all games
router.get('/', async (req, res) => {    
    
    try {
// Create funtions to create snapShots of DB collections of hamsters (use snapShots.forEach() and then hamsters.push()
// Create an empty array for hamsters first, a placeholder for us to use to push in the new data as doc.
        let games = []
        let snapShots = await db.collection('games').get()
        
        snapShots.forEach(doc => {
            games.push(doc.data())
        })
        
        res.status(200).send(games)

    } catch (err) {
        res.status(500).send(err)
    }
})

//POST (add) new game
router.post('/', async (req, res) => {
    
    try {
//Creates an empty document in games (Create games if it doesn't exist)
        let docRef = await db.collection('games').doc()
        
//Sets the contents of the document to ID, time-stamp & the contents inside req.body
        await docRef.set({
            id: docRef.id,
            timestamp: Date.now(),
            ...req.body
        })
        
        res.status(200).send({ msg: 'New game added.'});

    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;