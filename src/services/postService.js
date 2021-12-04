const { Op } = require('sequelize');

const { BlogPost } = require('../../database/models');
const { User } = require('../../database/models');
const { Category } = require('../../database/models');

const err = require('../helpers/errors');

const registerNewPost = async (title, content, categoryIds, userId) => {
  const result = await BlogPost.create({ userId, title, content });
  await result.setCategories(categoryIds);

  return result;
};

const updatePost = async (userId, id, title, content) => {
  const confirmUser = await BlogPost.findOne({
    where: { userId },
  });

  if (confirmUser === null) return { error: err.unauthorizedUser };

  await BlogPost.update(
      { title, content, updated: new Date() },
      { where: { id } },
  );

  const postResult = await BlogPost.findOne({
    where: { id },
    attributes: { exclude: ['id', 'published', 'updated'] },
    include: [{ model: Category, as: 'categories' }],
  });

  return postResult;
};

const searchPostsByTerm = async (term) => {
  // https://sequelize.org/master/manual/model-querying-basics.html#operators
  const postsResponse = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${term}%` } },
        { content: { [Op.like]: `%${term}%` } },
      ],
    },
    // Include all associantions: https://sequelize.org/master/manual/eager-loading.html#including-everything
    // Exclude in associantion field: https://github.com/sequelize/sequelize/issues/6395
    include: { all: true, attributes: { exclude: ['password'] } },
  });

  return postsResponse;
};

const searchAllPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return result;
};

const searchById = async (id) => {
  const result = await BlogPost.findByPk(id, { include: [{ all: true }] });

  if (result === null) return { error: err.nonExistentPost };

  return result;
};

const deletePost = async (id, userId) => {
  const existPost = await BlogPost.findByPk(id);

  if (existPost === null) return { status: 404, error: err.nonExistentPost };
  if (existPost.userId !== userId) return { status: 401, error: err.unauthorizedUser };

  const response = await BlogPost.destroy({ where: { id } });
  
  return response;
};

module.exports = {
  registerNewPost,
  updatePost,
  searchPostsByTerm,
  searchAllPosts,
  searchById,
  deletePost,
};