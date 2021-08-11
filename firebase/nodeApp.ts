// import * as admin from 'firebase-admin'

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//       privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
//     }),
//     databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//   })
// }

// export default admin

import * as admin from 'firebase-admin'

export const verifyIdToken = (token:any) => {
  const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY

  if(!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: firebasePrivateKey?.replace(/\\n/g, '\n'),
      }),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
    })
  }
  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error
    })
}