var express = require('express');
var router = express.Router();

/* GET notes listing. */
router.get('/', function(req, res, next) {
  const notes = Note.findAll();
  res.json(notes);
});

/* POST note create. */
router.post('/', function(req, res, next) {
  const note = req.body;
  Note.create(note).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

module.exports = router;
