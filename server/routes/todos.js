const router = require('express').Router();
const handle = require('../handlers');

router.get('/', handle.getTodos);
router.post('/add', handle.create);
router.delete('/:todoId', handle.delete);
router.post('/:todoId/complete', handle.complete);

module.exports = router;