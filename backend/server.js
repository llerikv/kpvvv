require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const pool = new Pool({
 connectionString: process.env.DATABASE_URL,
 ssl: {
  rejectUnauthorized: false,
 },
});

// GET all todos
app.get("/todos", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM todo ORDER BY id ASC");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).json({ error: "Internal server error"});
    }    
});

// GET SINGLE TODO
app.get("/todos/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await pool.query(
        "SELECT * FROM todo WHERE id = $1",
        [id]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "Todo not found" });
      }
  
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error fetching todo:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  
  // CREATE TODO
  app.post("/todos", async (req, res) => {
    const { title } = req.body;
  
    try {
      const result = await pool.query(
        "INSERT INTO todo (title) VALUES ($1) RETURNING *",
        [title]
      );
  
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error("Error creating todo:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

// UPDATE TODO
app.put("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
  
    try {
      const result = await pool.query(
        "UPDATE todo SET title = $1 WHERE id = $2 RETURNING *",
        [title, id]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "Todo not found" });
      }
  
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error updating todo:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

// DELETE TODO
app.delete("/todos/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await pool.query(
        "DELETE FROM todo WHERE id = $1 RETURNING *",
        [id]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "Todo not found" });
      }
  
      res.json({
        message: "Todo deleted",
        todo: result.rows[0],
      });
  
    } catch (error) {
      console.error("Error deleting todo:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  
  // SERVER
  const PORT = process.env.PORT || 5000;
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
   
//curl -X POST http://localhost:5000/todos -H "Content-Type: application/json" -d '{"title": "Buy groceries11"}'

/*Get Health
app.get("/", (req, res) => {
    res.send("API is running ... ");
  });
//To run server at port 5000
const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
      console.log(' Server running on port ${PORT}');
});*/