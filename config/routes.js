const express = require('express');
const router = express.Router();
const bookMarkController = require('../app/controllers/bookMarkController');

router.get('/bookmarks/tags/', bookMarkController.getByTags);
router.get('/bookmarks', bookMarkController.list);
router.get('/bookmarks/:id', bookMarkController.show);
router.post('/bookmarks/', bookMarkController.create);
router.put('/bookmarks/:id', bookMarkController.update);
router.delete('/bookmarks/:id', bookMarkController.delete);

router.get('/:hash', bookMarkController.getByHash);
router.get('/bookmarks/tag/:name', bookMarkController.getByTag);

module.exports = router;