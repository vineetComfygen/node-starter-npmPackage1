require('dotenv').config();
const app = require('./app');

// Define port from environment or fallback to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
