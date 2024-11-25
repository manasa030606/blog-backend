const prisma = require('../models/prismaClient');

exports.addComment = async (req, res) => {
    const { blogId, content } = req.body;

    try {
        const comment = await prisma.comment.create({
            data: { content, blogId, userId: req.user.id },
        });
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
