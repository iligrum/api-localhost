import express from 'express';
import MainController from './controllers/routes'

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/option', MainController)

app.get('/', (req, res) => {
  return res.send('kkk')
})

export default app; 