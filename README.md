Git Commit History Viewer
This project provides a web application to view the git commit history of a given repository. It consists of a backend server built with Node.js and Express, and a frontend application developed with Angular.

Table of Contents
Prerequisites
Installation
Backend
Frontend
Running the Application
Usage
Contributing
License
Prerequisites
Node.js (v14+ recommended)
npm (v6+ recommended)
Angular CLI
Installation
Backend
Navigate to the backend directory:

bash
Copy code
cd path_to_project_directory/backend
Install the required dependencies:

Copy code
npm install
Create a .env file in the root of the backend directory and add the necessary environment variables. For example:

makefile
Copy code
PORT=3000
Frontend
Navigate to the frontend directory:

bash
Copy code
cd path_to_project_directory/frontend
Install the required dependencies:

Copy code
npm install
Update the environment.ts file with the appropriate API URL if needed.

Running the Application
Backend
From the backend directory, run:

sql
Copy code
npm start
This will start the Express server on the port specified in the .env file (default is 3000).

Frontend
From the frontend directory, run:

Copy code
ng serve
This will start the Angular development server. You can access the application at http://localhost:4200/.

Usage
Open the application in a web browser.
Enter the owner and repository name in the provided input fields.
Click on the "Search" button to view the commit history.
Contributing
If you'd like to contribute to this project, please create a fork, make your changes, and submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.