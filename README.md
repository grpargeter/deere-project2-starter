## Deere Project 2 Starter Code

## Set Up

1. Fork and clone this repo
1. `cd` into the folder and run `npm install`
1. In the root of your app, `touch .env` and add:

   ```bash
   PORT=3000
   JWT_SECRET=pancakes
   ```

1. Check out your `config/config.json` file. You'll need to create a database called `project2_development`
1. Sequelize is included in the app. You have a `User` model. Run `db:migrate` to create the `Users` table in your database.
1. Run `nodemon` and go to the Homepage: `localhost:3000/`

![](https://i.imgur.com/uuhrOxQ.png)

<br>

## Routes

You have the following routes available.

#### controllers/authController.js

- GET and POST `localhost:3000/auth/signup`
- GET and POST `localhost:3000/auth/login`
- GET `localhost:3000/auth/logout`

#### controllers/usersController.js

- GET `localhost:3000/profile/:id`

<br>

## Additional Resources

- [Fruit App Solution](https://git.generalassemb.ly/jdr-0622/fruit-app-in-class)
- [Pokemon Express Solution](https://git.generalassemb.ly/jdr-0622/pokemon-express-sequelize6)
- [Google Routes Spreadsheet](https://docs.google.com/spreadsheets/d/14-LHKXLtEkp_vKEz3qSKjREnrmSyzQ9fimTlmrPsZsQ/edit#gid=0)
- [JSON Web Tokens](https://jwt.io/)

//User Stories
//I would like to be able create new users on the site.
//I should be able to delete my own user account if needed
//I should be able to update/edit my account with new password/username
//I should be able to update image links in my account
//I would like have a title required for each image
//I would like the user to add a description regarding the sunset
//I would like other users to be able to view anyones pictures
//The user should be able to remove images they uploaded but not others
//The user should provide the location of where the image was taken.
//I would like to be able to search by location for all pictures.
