# QQ Text

## Overview

This project is an anonymous online community where users can share their feelings and receive support from others. The project includes a Rails API backend with a React frontend, CRUD actions for posts and comments, and user authentication/authorization.
## Built With
- Ruby on Rails
- React

## Getting Started

1. Clone the repository
2. Run `bundle install`
3. Run `rails db:migrate`
4. uncomment seed data in config --> seed.rb
5. Run `rails db:seed`
6. Run `rails s` to start the server
7. Run `npm install` to install the frontend dependencies
8. Run `npm start` to start the frontend server


## Features
- Three models: User, Post, Comment.
- User can create a post anonymously and other users can comment on it.
- Full CRUD actions for at least one resource.
- Minimum of create and read actions for EACH resource.
- Navbar to navigate between routes.

## Models and Relationships
- User has many posts and comments.
- Post has many comments.
- Comment belongs to a user and a post.
- The join table between users and posts includes a user submittable attribute called "anonymous" that allows the user to submit a post anonymously or with their username.

## Client-Side Routes
This project includes three different client-side routes using React Router:
- "/" (home page)
- "/posts" (view all posts)
- "/post/:id" (view a specific post and its comments)

## Authentication/Authorization
Users can:
- sign up with a new user account.
- log in to the site with a secure password and stay logged in via user ID in the session hash.
- log out of the site.

## Authors
- Angel Marte, Aaron Toplin , Taylan Postalci
## Conclusion
This project provides a safe and secure environment for users to express themselves anonymously, while also allowing others to offer support through comments. With the implementation of CRUD actions, relationships, client-side routing and authentication, it makes it a great platform for people to share their feelings.

## License
This project is licensed under the [Learn.co Educational Content License] License - see the [LICENSE.md](LICENSE.md) file for details.
