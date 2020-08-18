/* eslint-disable no-console */
import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import path from 'path';

const port = process.env.PORT || 3001;
const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views/');
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'src/index.html'));
// });

app.get('/', (req, res) => {
  res.render('index', { list: ['a', 'b'], title: 'Library' });
});

app.listen(port, () => {
  // debug(`${chalk.greenBright(`listening on port: ${port}`)}`);
  console.log(`${chalk.greenBright(`listening on port: ${port}`)}`);
});
