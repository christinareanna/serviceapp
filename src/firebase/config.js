import firebase from 'firebase/compat/app';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBT3GON01--mFQbiEYYBybuVkKXlr4357I',
    authDomain: 'your-auth-domain-b1234.firebaseapp.com',
    databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'serviceapp-cba08',
    storageBucket: 'your-project-id-1234.appspot.com',
    messagingSenderId: '12345-insert-yourse',
    appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };