Start From => " npm run build " 

then => " npm run start "


For those who are getting this error
"NODE_ENV" is not recognized as an internal or external command, operable command or batch file.

install this  - " npm install cross-env --save-dev "  

then add " cross-env " before both -  

"scripts": {
  "dev": "cross-env NODE_ENV=development nodemon backend/server.js",
  "start": "cross-env NODE_ENV=production node backend/server.js"
}

then " npm run start  "
