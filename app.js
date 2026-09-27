const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Custom logger middleware (applied globally)
app.use(logger);

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Student Management REST API is running",
    endpoints: {
      getAll: "GET /students",
      getOne: "GET /students/:id",
      create: "POST /students",
      update: "PUT /students/:id",
      delete: "DELETE /students/:id",
    },
  });
});

// Mount student routes
app.use("/students", studentRoutes);

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
