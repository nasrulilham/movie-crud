const movieController = require('../controllers/movie.controller');
const router = require('express').Router();

router.post('/', movieController.create);
router.get('/', movieController.findAll);
router.put('/:id', movieController.update);
router.delete('/:id', movieController.deleteMovie);
router.get('/:id', movieController.findOne);

module.exports = router;