import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/proba', (req, res) => {
  res.send({hello: 'hello world'})
})

app.listen(5000, () => {
  console.log('http://localhost:5000');
})
