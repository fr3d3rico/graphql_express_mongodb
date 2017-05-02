const  {Router} = require('express');
var personRouter = Router();
var personMondel = require('../models/Person');

personRouter.get('/', (req, res, next) => {
  personMondel.find((err, result) => {
    if( err ) {
      return console.error(err);
    }

    res.type('json');
    res.send( result );
  });
});

personRouter.get('/:id', (req, res, next) => {
  personMondel.find({ _id: req.params.id }, (err, person) => {
      if( err ) {
        return console.error(err);
      }

      res.type('json');
      res.send( person );
  });
});

module.exports = personRouter;
