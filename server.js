'use strict';

/* hola */

var app = require('./app'),
	server = app.listen(app.get('port'), () => {
		console.log('Iniciando Aplicacion');
	});
