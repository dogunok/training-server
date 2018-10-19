const express = require('express'),
      app = express(),
      handlebars = require('express-handlebars').create({defaultLayout: 'main'});
    
    app.engine('handlebars', handlebars.engine);
    app.set('view engine', 'handlebars');
    app.set('port', process.env.PORT || 3000);

    app.get('/', (req, res)=>{
        
        res.render('home');
    })
    app.get('/about', (req, res)=>{
        res.render('about');
    })
    app.use((req, res)=>{
       //nonode res.status(404);
        res.render('404');
    })

    app.use((err, req, res, next)=>{
        console.error(err.stock);
       // res.status(500);
        res.render('500');
    })

    app.listen(app.get('port'), ()=>{
        console.log('Express запущен на http://localhost:' + app.get('port'))
    })