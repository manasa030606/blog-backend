const prisma = require('../models/prismaClient');

exports.createBlog = async (req, res) => {
    const { title, content } = req.body;

    try {
        const blog = await prisma.blog.create({
            data: { title, content, authorId: req.user.id },
        });
        res.status(201).json(blog);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await prisma.blog.findMany({
            include: { author: true },
        });
        res.json(blogs);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
