const { Router } = require('express');
const { db } = require('./../firebase')

const router = new Router();

router.get('/', async (req, res) => {
    
    try {
        // Create funtions to create snapshots of DB collections of hamsters (use snapShots.forEach() and then hamsters.push()
        // Create an empty array for hamsters first, a placeholder for us to use to push in the new data
        db.collection('hamsters').get().then(snapShot => {
            console.log(snapShot);
            let hamsters = []
            snapShot.forEach(hamster  => {
                hamsters.push(hamster.data())
            })
            res.status(200).send({ hamsters: hamsters })
        })
    }
    catch (error) {
        res.status(500).send(err);
    }
    
})

router.get('/random', async (req, res) => {
    
    try {
        // Create funtions to bring forth random hamsters
        db.collection('hamsters').get().then(snapShot => {
            console.log(snapShot);
            let hamsters = []
            snapShot.forEach(hamster  => {
                hamsters.push(hamster.data())
            })
            let rand = Math.floor(Math.random()*hamsters.length)
            res.status(200).send(hamsters[rand])
        })
    }
    catch (err) {
        res.status(500).send(err);
    }
})

router.get('/:id', async (req, res) => {
    
    try {
        // Create funtions to get and show ID of hamsters
        let hamsters = []
        let snapShot = await db.collection('hamsters').where("id", "==", parseInt(req.params.id)).get()
        snapShot.forEach(doc => {
            hamsters.push(doc.data())
        })
        console.log(hamsters)
        res.status(200).send(hamsters[0])
    }
    catch (err) {
        res.status(500).send(err);
    }
})

// router.put('/:id/result', async (req, res) => {
    
//     try {
//         // Create functions to show updated amounts of wins and losses of games
//         let hamsters = []
//         let snapShot = await db.collection('hamsters').where("id", "==", parseInt(req.params.id)).get()
//         snapShot.forEach(doc => {
//             hamsters.push(doc.data())
//         })
//         if (req.body.wins === 1) {
//             hamsters[0].wins++
//             res.status(200).send(`${hamsters[0].name} now has ${hamsters[0].wins} wins!`)
//         } else if (req.body.defeats == 1) {
//             hamsters[0].defeats++
//             res.status(200).send(`${hamsters[0].name} now has ${hamsters[0].defeats} defeats!`)
//         } else {
//             throw ("Error: Invalid Request: You must either increase wins or defeats by 1")
//         }
//         hamsters[0].games++
//         db.collection('hamsters').doc(req.params.id).set(hamsters[0])       
//     }
//     catch (err) {
//         console.error(err)
//     }
// })

//Updates hamster's wins && defeats by ID
router.put('/:id/result', async (req, res) => {
    try {
        const snapshot = await db.collection('hamsters').doc(req.params.id).get();
        const hamster = snapshot.data();

        if (req.body.wins === 1 && req.body.defeats === 0) {
            hamster.wins++;
            hamster.games++;
        } else if (req.body.wins === 0 && req.body.defeats === 1) {
            hamster.defeats++;
            hamster.games++;
        } else {
            throw 'Error: Invalid Request: You must either increase wins or defeats by 1';
        }

        await db.collection('hamsters').doc(req.params.id).set(hamster)
        res.status(200).send({ msg: `Hamster with ID: ${req.params.id} updated` });

    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;