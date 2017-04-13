# Johari Window App
## Quick overview

This is a tool developed at the Turing School, based on the [Johari Window](https://en.wikipedia.org/wiki/Johari_window) Exercise developed in 1955 by Joseph Luft and Harrington Ingham. It is a front-end app that works with our Rails backend [Johari Window API](https://github.com/Dpalazzari/johari_window_api).

Visit the live website [here!](https://johariwindow.herokuapp.com/)

Check out the [Consideration docs](CONSIDERATIONS.md) for user accessibility details!

## Getting Started
Here is a quick guide to getting started.

1. Clone this repo:
##### `git clone https://github.com/lucyconklin/johari-window.git`

1. Install with:
##### `npm install`

1. Start the server:
##### `npm server`
OR
##### `yarn`

1. Run the tests:
##### `npm test`

1. Visit in your browser at localhost//:3000 (most likely your app will be at this port, but check your terminal after you start the server for confirmation)

## Development Environment

After getting started, to run the app locally, just type `npm start` into the command line. The app should automatically be opened in your browser. Peruse at your pleasure!

You will have to create your own [back-end application](https://github.com/Dpalazzari/johari_window_api) and scope the CORS requirements in order for it to have full functionality with the backend API.

## Production Environment

You will also have to scope your back-end app for the production site as well. Be sure to set up your application through [AuthO](https://auth0.com/) and follow the instructions to get user login functionality.

After that, once you push both apps to production, it should function just fine.

## Common Issues

Don't clean out your localStorage if you can help it. If you don't know what that is, that's great! If you do, try not to mess with it.

## Going Forward

- The projects ability to login and redirect certain components needs to be refined.

- Once the site is up and functional, we want all Turing students to login to the app. Then, they can start using it for every group project they participate in at Turing!

## Primary Contributors

- [Lucy Conklin](https://github.com/lucyconklin)
- [Annie Wolff](https://github.com/wlffann)
- [Drew Palazzari](https://github.com/Dpalazzari)
- [Kyle Heppenstall](https://github.com/kheppenstall)
- [Amy Kintner](https://github.com/akintner)
