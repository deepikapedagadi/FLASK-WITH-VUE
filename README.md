# FLASK-WITH-VUE
A simple full-stack application demonstrating interaction between a Flask backend and a Vue.js frontend. The app allows users to enter data on one page, sends it to the backend, and displays the result on another page.

#Project Structure

Backend: Handles API requests and responses.

Frontend: Contains static HTML pages and Vue.js scripts for user interaction.

Data Flow: User input from the frontend is sent to Flask via API, response is stored locally and displayed on a separate page.

Backend Features

Provides APIs for sending and receiving data.

Uses CORS to allow communication from frontend hosted on a different origin.

Runs locally on a development server.

Supports testing via Postman for both GET and POST requests.

Frontend Features

Input page for capturing user data.

Output page for displaying backend responses.

Vue.js handles user interaction, API calls, and dynamic updates.

Data persistence between pages achieved using local storage.

Can be run directly in the browser or via a local server for live preview.

Usage

Start the backend server.

Open the frontend input page in a browser.

Enter data and submit to view results on the output page.

APIs can be tested independently using tools like Postman.

#Dependencies

Backend: Flask, Flask-CORS.

Frontend: Vue.js.