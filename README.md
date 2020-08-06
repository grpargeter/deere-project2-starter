# Project Overview

## Project Description

As a avid picture taker of sunsets I wanted to create an application my wife and her friends can use to upload, tag and share their sunsets with each other.

## Project Links

- [github repo]()
- [deployment]()

## Wireframes

### Entity Relationship Diagram:


### Wireframes



## User Stories

### 1. User Story One

I would like to have each user be able create their own account on the site.

-Complete

### 2. User Story Two

I would like users to be able to login in and stay logged in until they choose to logout.

-Complete
### 3. User Story Three

I would like the users to have the ablity to view all submission in one location.

-Complete -Created a "Gallery" page.

### 4. User Story Four

I would like everyone to be able to delete their own submissions but not other users.

-Complete 

### 5. User Story Five

I would like to have users be required to enter a "Title" for the submission.

-Complete

### 6. User Story Six

I would like users to be able to upload images directly from the app to the cloud to save local storage.

-Completed using Cloudinary API

### 7. User Story Seven

I would like to give the users the option to add a description to their picture for others to read.
-Complete provided field for description

### 8. User Story Eight

Users should be able to edit the title and description of thier pictures but other users.

-Complete 

### 9. User Story Nine

Users should be able to provide location detail for the picture uploads.

-Complete

### 10. User Story Ten

Users should only be able to upload JPG and PNG files for compatiblity issues.

-Complete Set format its the imagescontroller Couldinary settings.

## MVP File Structure

Views

- Users
  - index.ejs - Landing page user can login/out from here.
  - signup.ejs - User can create an account
  - login.ejs - Page where users can login
  - profile.ejs - Users can edit account details and see their submissions
  
- images
  - Show.ejs - Show individual image submissions
  - Index.ejs - Shows gallery of all images
  - Edit.ejs - Images can be edited from here
  - New.ejs - Users can upload images and provide description, location and title.

Models

- sunsets.js defines sunset table fields
- index.js required by sequelize
- user.js defines users table fields


Controllers

- authController controls login and signup functions
- imagesController.js - controls all tasks around viewing/creating images
- usersContorller.js - controls all tasks around user account details.

