import { projectsRepo } from '../../../utils/projects-repo'

const getProjects = async (req, res) => {
  const count = req.query.count || null
  const projects = projectsRepo.getAll(count)

  res.status(200).json(projects)
}

export default getProjects
