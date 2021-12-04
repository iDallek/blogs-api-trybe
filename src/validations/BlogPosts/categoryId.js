const Joi = require('joi');

const { Category } = require('../../../database/models');
const err = require('../../helpers/errors');

const joiCategoryIdsSchema = Joi.array()
  .items(
    Joi.number()
    .integer()
    .messages({
      'number.base': 'Values in "categoryIds" must be a number',
    }),
  );

const validCategoryIds = (req) => {
  const { categoryIds } = req.body;

  if (!categoryIds) return err.categoryRequired;

  const validationResult = joiCategoryIdsSchema.validate(categoryIds, { convert: false });

  if (validationResult.error) {
    const { message } = validationResult.error.details[0];

    return { message };
  }
};

const validExistsCategory = async (req, res, next) => {
  const { categoryIds } = req.body;

  const result = await Category.findAndCountAll({ where: { id: categoryIds } });

  if (result.count !== categoryIds.length) {
    return res.status(400).json(err.nonExistentCategory);
  }

  next();
};

const cannotBeEditedCategory = async (req, res, next) => {
  const { categoryIds } = req.body;

  console.log(categoryIds);

  if (categoryIds) return res.status(400).json(err.categoriesCannotBeEdited);

  next();
};

module.exports = {
  validCategoryIds,
  validExistsCategory,
  cannotBeEditedCategory,
};