const express = require('express'),
      app = express();

    app.set('port', process.env.PORT || 3000);

    app.get('/', (req, res)=>{
        res.type('text/plain');
        res.send('homepage');
    })
    app.get('/about', (req, res)=>{
        res.type('text/plain');
        res.send('/about');
    })
    app.use((req, res)=>{
        res.type('text/plain');
        res.status(404);
        res.send('404 - не найдено');
    })

    app.use((err, req, res, next)=>{
        console.error(err.stock);
        res.type('text/plain');
        res.status(500);
        res.send('500 - ошибка сервера');
    })

    app.listen(app.get('port'), ()=>{
        console.log('Express запущен на https://localhost:' + app.get('port'))
    })