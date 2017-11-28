const model = require('../models/snacks')

function getAll (req, res, next) {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json({ data })
}

function create (req, res, next) {
  const result = model.create(req.body)

  if (result.errors) {
    return next({ status: 400, message: `Cant find your flava-Flave, dawg ¯\_(ツ)_/¯`, errors: result.errors })
  }

  res.status(201).json({ data: result })
}

module.exports = { getAll, create }
