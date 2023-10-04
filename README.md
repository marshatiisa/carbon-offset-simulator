# Carbon Offset Simulator

The Carbon Offset Simulator is a web application that allows users to calculate and simulate their carbon offset contributions. This README provides information on how to set up and use the application.

## Getting Started

To run the Carbon Offset Simulator, you'll need to set up both the frontend and backend. The frontend is built with React, while the backend is built with Node.js and Express.js.

### Prerequisites

Before you begin, make sure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/marshatiisa/carbon-offset-simulator.git
   ```

2. Navigate to the project directory:

   ```
   cd carbon-offset-simulator
   ```

3. Install the required packages for both the frontend and backend:

   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../api
   npm install
   npm install express
    ```
### Frontend Dependencies

- [react-hook-forms](https://www.npmjs.com/package/react-hook-forms): Used for handling form input on the front end.
- [react-bootstrap-table2](https://www.npmjs.com/package/react-bootstrap-table2): Used for tabulating data.
- [recharts](https://www.npmjs.com/package/recharts): Used for handling data visualization.


## Running the Application

To start the Carbon Offset Simulator, follow these steps:

### Frontend

1. In the project root directory, navigate to the `frontend` folder:

   ```
   cd client
   ```

2. Start the frontend development server:

   ```
   npm start
   ```

   This will launch the frontend on [http://localhost:3000](http://localhost:3000).

### Backend

1. In the project root directory, navigate to the `backend` folder:

   ```
   cd api
   ```

2. Start the backend server:

   ```
   npm start
   ```

   The backend server will run on [http://localhost:3001](http://localhost:3001).


