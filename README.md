<h1 align="center">Product Store App</h1>

About This Project:

-   ⚛️ Tech Stack: React.js, Node.js, Express.js, MongoDB, Chakra UI
-   🔥 Build an API
-   📱 Responsive UI With React.js and ChakraUI
-   🐞 Error Handling
-   🌐 Deployment

### Run this app locally

```shell
npm run build
```

### Start the app

```shell
npm run start
```


## Error Handling 
 For those who are getting this error "NODE_ENV" is not recognized as an internal or external command, operable command or batch file.


## Installation

Install

```bash
  npm install cross-env --save-dev
```

then add " cross-env " before both in package.json

```javascript
"scripts": 
  { "dev": "cross-env NODE_ENV=development nodemon backend/server.js", 
  "start": "cross-env NODE_ENV=production node backend/server.js" }
```

Then Start the app
