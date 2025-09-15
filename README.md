# Profile Atlas

## Description
Profile Atlas is a web application designed to manage user profiles efficiently. It allows administrators to create, update, view, and delete user profiles. The application features a seamless user interface built with React.js and a robust backend powered by Node.js, Express, and MongoDB.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Prerequisites
Before running this project, ensure the following are installed on your system:
- **Node.js** (LTS version recommended) - [Download Node.js](https://nodejs.org/)
- **MongoDB** - [Install MongoDB](https://www.mongodb.com/try/download/community)
- **MongoDB Compass** (optional, for database visualization) - [Download MongoDB Compass](https://www.mongodb.com/products/compass)

## Repository Link
[GitHub Repository](https://github.com/EclipseDaemon/Profile-Atlas)

## File Structure
Client
Server

## How to Clone and Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/EclipseDaemon/Profile-Atlas.git

2. <code>cd Client</code>
<code>npm install</code>

3. <code>cd Server</code>
<code>npm install</code>

4. **After Installing all the dependencies**
   <ul>
   <li> -start your react server on (localhost: 5173)</li>
  <li>  -open your mongodb compass application and then start  connection and a create database.</li>
  <li>  -update your database name with the file (Server >> db >> dbConnection.js) to  "mongodb://127.0.0.1/yourdatabasename".</li>
   <li> -start your express server on (localhost:3000)</li>
  <li>  -after doing this ensure the express server is running properly and  "Database Connected !" is displayed on console.</li>
  <li>  -once all things are set you can go to react server at end point (localhost:5173/admin) there you can add profile as you like.</li>
   <li> -you can see update profile on (localhost:5173) homepage and when you click on summary button you will be redirected to map navigation map.</li>
 <li>-if you want to delete or update profile you can go to same endpoint (localhost:5173/admin) and there you can delete or update your profile.</li>
   </ul>


***Thank You***



