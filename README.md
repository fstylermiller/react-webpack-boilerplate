
This is a boilerplate for a ReactJS, Webpack, PostgreSQL, and Express app. I call it the NERP stack (Node, Express, React, PostgreSQL).
--
Usage

```
$ git clone https://github.com/voxelsdev/react-webpack-boilerplate.git

$ mv -a react-webpack-boilerplate/. whateveryouwantittobenamed/

$ rm -rf react-webpack-boilerplate/

$ cd whateveryouwantittobenamed/

$ npm i
```

##### Make it your own.

```
$ rm -rf .git
$ git init
$ git remote set-url origin https://YourRepoHere
```

##### Start it up!

```
$ npm start
```

Go to localhost:3️⃣0️⃣0️⃣0️⃣/ for the app.

This project has css, image, and js loaders, which I would reccommend taking a look at those npm pages for more information.

Make sure you have the latest versions of everything, too. (node, pg, and whatnot).

--
## Crucial changes (for your app to work)

- Create a PG database
- Change development conection in knexfile.js

## Extraneous changes (to personalize the app)

- Change project name / description in package.json
- Change author in package.json
- Add a .env file

--
##### Make something neat!
- Add jsx and css files under the `src/` directory. The basic page setup is already implemented.
