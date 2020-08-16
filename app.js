import express from 'express' ;
import chalk from 'chalk' ;
import morgan from 'morgan' ;
import path from 'path' ;
import debug from 'debug';

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'src/index.html'))
});

var port = 3000
app.listen(port, ()=>{
    // debug(`${chalk.greenBright(`listening on port: ${port}`)}`)
    console.log(`${chalk.greenBright(`listening on port: ${port}`)}`)
});