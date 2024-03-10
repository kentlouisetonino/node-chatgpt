require('dotenv').config();
import app from './app';

const PORT = process.env.PORT;

// Server listener.
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
