

import * as firebase from 'firebase';

  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  
  firebase.initializeApp(config);

  const database = firebase.database();

  export {firebase, database as default};


  // apiKey: "AIzaSyDJEqoonUmCF7huAsdfyfvgwvjH70KLYQE",
  //   authDomain: "expensify-67d98.firebaseapp.com",
  //   databaseURL: "https://expensify-67d98.firebaseio.com",
  //   projectId: "expensify-67d98",
  //   storageBucket: "expensify-67d98.appspot.com",
  //   messagingSenderId: "126666795769"
//   //child_removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   //child_changed
//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   //child_added
//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
//   //  database.ref('expenses').on('value',(snapshot) => {
    
//   //    const expenses = [];
//   //    snapshot.forEach((childSnapshot) => {
//   //      expenses.push({
//   //          id: childSnapshot.key,
//   //          ...childSnapshot.val()
//   //      });
//   //    });

//   //    console.log(expenses);
//   //   });

//   // database.ref('notes/-LWxvdWRywxQ4mv2bn-7').update({
//   //   body: 'Buy food'
//   // });

//   database.ref('expenses').push({
//     Description: 'Boots',
//     Note: 'Dont tread on me',
//     amount:120,
//     createdAt: 11-4-18
//   });

  
// //   database.ref().set({
// //     name: 'Shaner Baner',
// //     age:42,
// //     job: {
// //       position:'Software Developer',
// //       company: ''
// //     },
// //     location: {
// //       city: 'Leesburg',
// //       country: 'United States'
// //     }
// // }).then (() => {
// //   console.log('Data is saved');
// // }).catch((e) => {
// //   console.log('This failed', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/position': 'Manager',
// //   'job/company': 'Amazon',
// //   'location/city':'Meritt Island'
// //   });

// // //database.ref('iSingle').set(null); works the same as remove

// // database.ref('iSingle')
// // .remove()
// // .then(() => {console.log('Removed')
// // }).catch((e) => {
// //   console.log("Remove failed", e)
// // });

// // database.ref('location/city')
// // .once('value')
// // .then((snapShot) => {
// //   const val = snapShot.val();
// //   console.log(val);
// // })
// // .catch((e) => {
// //   console.log('Error fetching data', e );
// // });

// // database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // });

// // const onValueChange = (snapshot) => {
// //   console.log(snapshot.val());
// // };
// //database.ref().on('value', onValueChange);
// //
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Error reading database', e);
// // });

// // setTimeout(() => {
// //  database.ref('age').set(40);
// // }, 3500)

// // setTimeout(() => {
// //   database.ref().off(onValueChange);
// //  }, 7000)

// //  setTimeout(() => {
// //   database.ref('job/company').set('Google');
// //  }, 10500)

// //   database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.position} at ${val.job.company}`);
// // }, (e) => {
// //   console.log('Error reading database', e);
// // });