const uuid = require('uuid/v4')
const snacks = []

function getAll (limit) {
  return limit ? snacks.slice(0, limit) : snacks
}

function create (body) {
  const errors = []
  const name = body.name

  let response
  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    const snack = { id: uuid(), name }
    snacks.push(snack)
    response = snack
  }

  return response
}

module.exports = { getAll, create }
