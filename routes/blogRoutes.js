const express = require('express');
const { createBlog, getAllBlogs } = require('../controllers/blogController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createBlog);
router.get('/', getAllBlogs);

module.exports = router;
