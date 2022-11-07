import type { IProject } from '@/types/project.interface'

import ItemCard from '../ItemCard'

type Props = {
  projects: IProject[]
}

const ItemList = ({ projects }: Props) => {
  return (
    <section>
      <div className="container mx-auto mt-7 gap-7">
        <div className="flex flex-wrap -mx-3">
          {projects
            // .slice(0, next)
            .map((project, i) => (
              <ItemCard key={i} project={project} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default ItemList
