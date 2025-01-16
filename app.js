var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var examenesRouter = require('./routes/examenesRoutes');
var categoriaRouter = require('./routes/categoriaRoutes');
var actividadRouter = require('./routes/actividadRoutes');
var contactoRouter = require('./routes/contactoRoutes');
var estudianteRouter = require('./routes/estudianteRoutes');
var estudianteactividadRoutes = require('./routes/estudianteactividadRoutes');
var examenestudianteRoutes = require('./routes/examenestudianteRoutes');
var materiaRoutes = require('./routes/materiaRoutes');
var materiaestudianteRoutes = require('./routes/materiaestudianteRoutes');
var preguntaRoutes = require('./routes/preguntaRoutes');
var tipoactividadRoutes = require('./routes/tipoactividadRoutes');
var usuarioRoutes = require('./routes/usuarioRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/examenes', examenesRouter);
app.use('/categorias', categoriaRouter);
app.use('/activdades', actividadRouter);
app.use('/contactos',contactoRouter);
app.use('/estudiantes',estudianteRouter);
app.use('/estudianteactividad',estudianteactividadRoutes);
app.use('/examenestudiantes',examenestudianteRoutes);
app.use('/materias',materiaRoutes);
app.use('/materiaestudiante',materiaestudianteRoutes);
app.use('/preguntas',preguntaRoutes);
app.use('/tipoactividades',tipoactividadRoutes);
app.use('/usuarios',usuarioRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
