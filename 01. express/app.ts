import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { adminData } from './routes/admin';
import { shopRoutes } from './routes/shop';
import { engine } from 'express-handlebars';

const app = express();

// app.engine('hbs', engine());
// app.set('view engine', 'hbs');

// app.set('view engine', 'pug');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
