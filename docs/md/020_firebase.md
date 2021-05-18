![Logo](../media/png/greybeard_header.png)  
## Firebase 
[Home](../../README.md) 

Firebase is a free & useful resource we can use to quickly and securely host HTML, Node and more

Every Google User automatically has an account, so the fact that Advicator use Google means everyone can login their own unique [firebase portal](https://console.firebase.google.com/) and projects can be shared

## Environment Variables

`.development.env` etc

```bash
# App
REACT_APP_APP=

# Env
REACT_APP_ENV=DEV

# API
REACT_APP_LISTINGSLAB_API=http://localhost:5001/listingslab--express-api/us-central1/api

# Firebase
REACT_APP_FIREBASE_APIKEY=
REACT_APP_FIREBASE_AUTHDOMAIN=
REACT_APP_FIREBASE_DATABASEURL=
REACT_APP_FIREBASE_PROJECTID=
REACT_APP_FIREBASE_STORAGEBUCKET=
REACT_APP_FIREBASE_MESSAGESENDERID=
REACT_APP_FIREBASE_APPID=
REACT_APP_API_IPGEO=
```

## Firebase Projects

- 



```javascript
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBr7JTjhjAt4217g5532HteGv3QDCk6I8w",
    authDomain: "advicator-docs.firebaseapp.com",
    projectId: "advicator-docs",
    storageBucket: "advicator-docs.appspot.com",
    messagingSenderId: "326911528289",
    appId: "1:326911528289:web:7858d57a545b7966410920"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
```