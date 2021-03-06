const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hamsterwars-3792a.firebaseio.com"
});

const auth = admin.auth()
const db = admin.firestore()

module.exports = { auth, db }