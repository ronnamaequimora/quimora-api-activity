imports (express, dotenv, db)
connectDB()
app.use(express.json())
app.use(process.env.BASE_URI, apiRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});
const express = require('express');