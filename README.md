# firebasenodeserver

Express-Node server on firebase, using functions.

```
     "rewrites": [
       {
         "source": "**",
         "destination": "/index.html"
       }
     ]
```

### To serve locally on your machine

```
firebase serve --only "functions,hosting"
```

### To deploy changes

```
firebase deploy
```

Using public, we can cache the content to Server, if we use private we can only store on user browser.
max-age: How long we can cache the content on user browser.
s-maxage: How long we can cache the content on server.

### To Store Environement keys on firebase in terminal

```
firebase functions:config:set someservice.key="THE API KEY" someservice.id="THE CLIENT ID"
```

To get, type in terminal

```
firebase functions:config:get
```

### To access in code

```
const functions = require('firebase-functions');

functions.config().someservice.id
```

### To initialize firebase with config

```
const firebaseApp = firebase.initializeApp(functions.config().firebase);
```

Just make sure, when running server it's hosted on firebase or else you need the config copied to index or any file and used from there.
