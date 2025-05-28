const express = require('express'); // Express.js framework for building web applications
const { Pool } = require('pg');     // PostgreSQL client for Node.js
const cors = require('cors');       // Middleware for enabling Cross-Origin Resource Sharing
require('dotenv').config();   

// Create an Express application instance
const app = express();
const port = 5000; // The port on which the backend server will listen

// Middleware:
// 1. Enable CORS for all origins. This is important for the frontend (running on a different port) to communicate with the backend.
app.use(cors());
// 2. Parse incoming JSON requests. This allows Express to read JSON data sent in the request body.
app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,      // PostgreSQL username from .env
    host: process.env.DB_HOST,      // Database host (localhost in this case) from .env
    database: process.env.DB_DATABASE, // Database name from .env
    password: process.env.DB_PASSWORD, // Database password from .env
    port: process.env.DB_PORT,      // Database port from .env (default is 5432)
});

// Start the Express server

// Test database connection
pool.connect((err, client, release) => {
    if (err) {
        // Log an error if connection fails
        return console.error('Error acquiring client', err.stack);
    }
    // Log a success message if connection is established
    console.log('Connected to PostgreSQL database!');
    // release(); // Release the client back to the pool
    
});
app.listen(port, () => {
    // Log a message indicating the server is running and on which port
    console.log(`HR Backend server running on http://localhost:${port}`);
});

// --- API Endpoints ---

// GET all employees
// Route: /api/employees
// Fetches all records from the 'employees' table.
app.get('/api/employees', async (req, res) => {
    try {
        // Execute a SQL query to select all employees, ordered by id
        const result = await pool.query(`
            SELECT * FROM employees WHERE id = $1
            `,[2]
        );
        // Send the query results as a JSON response
        console.log(result);
        res.json(result.rows);
    } catch (err) {
        // Log the error and send a 500 (Internal Server Error) response
        console.error('Error fetching employees:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});