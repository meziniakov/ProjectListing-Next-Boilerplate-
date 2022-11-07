const fs = require('fs')

// projects in JSON file for simplicity, store in a db for production applications
let projects = require('../../public/data/json1667466766327.json')

function saveData() {
  fs.writeFileSync('data/json1.json', JSON.stringify(projects, null, 4))
}

function create(project) {
  // generate new user id
  // project["ИНН"] = project.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

  // set date created and updated
  projects.dateCreated = new Date().toISOString()
  projects.dateUpdated = new Date().toISOString()

  // add and save user
  projects.push(project)
  saveData()
}

function update(INN, params) {
  const project = projects.find((x) => x['ИНН'] === INN)

  // set date updated
  project.dateUpdated = new Date().toISOString()

  // update and save
  Object.assign(project, params)
  saveData()
}

/* eslint no-underscore-dangle: 0 */
function _delete(INN) {
  // filter out deleted user and save
  projects = projects.filter((x) => x['ИНН'] !== INN)
  saveData()
}

export const projectsRepo = {
  getAll: (limit) => projects.slice(0, limit || projects.length),
  getByINN: (INN) => projects.find((x) => x['ИНН'] === INN),
  find: (x) => projects.find(x),
  create,
  update,
  delete: _delete,
}
