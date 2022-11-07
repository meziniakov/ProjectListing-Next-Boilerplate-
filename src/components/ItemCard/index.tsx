import Image from 'next/image'
import Link from 'next/link'

import type { IProject } from '@/types/project.interface'

type Props = {
  project: IProject
}
const ItemCard = ({ project }: Props) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-6">
      <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div>
          <Link
            href={{
              pathname: `/project/${project['ИНН']}`,
              // query: { id:  },
            }}
          >
            <div className="relative overflow-hidden">
              <button>
                <span className="absolute hover:cursor-pointer right-2 top-2 z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="#ff385c"
                    viewBox="0 0 32 32"
                    stroke="#fff"
                    strokeWidth={2}
                  >
                    <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                  </svg>
                </span>
              </button>
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27500%27%20height=%27300%27/%3e"
              />
              <Image
                src={'/vercel.svg'}
                className="absolute inset-0 w-full object-cover"
                priority={true}
                width={500}
                height={300}
                alt={''}
              />
            </div>
          </Link>
        </div>
        <div className="p-4">
          <div className="mb-3">
            <h2 className="my-2 text-2xl font-bold">
              {/* {project.firstname} {project.lastname} */}
              {project['Наименование']}
            </h2>
            <span>
              {/* {project.job[0]?.substring(
                project.job[0].lastIndexOf('@') + 1,
                project.job[0].length
              )} */}
              {project['Регион МИП']}
            </span>
          </div>
          <div className="inline-flex w-full">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span className="text-sm">
              {/* {project.job[0]?.substring(0, project.job[0].lastIndexOf('@'))} */}
            </span>
          </div>
          <div className="inline-flex w-full">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </span>
          </div>
          {/* <div className="text-red-700">
            <Link href={'/'}>
              <a onClick={(e) => onDelete(e, project._id)}>Delete</a>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default ItemCard
