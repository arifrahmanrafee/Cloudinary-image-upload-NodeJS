const app = require('./src/app');
const connectDb = require('./src/db/db.js');


app.listen(3000, () => {
  console.log('Server running at port no 3000');
});

connectDb();
