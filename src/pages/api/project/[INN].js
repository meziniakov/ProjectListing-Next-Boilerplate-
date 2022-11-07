import { projectsRepo } from '../../../utils/projects-repo'

const getByINN = async (req, res) => {
  const project = projectsRepo.find((x) => x['ИНН'] === req.query.INN)
  res.status(200).json(project)
}
export default getByINN
