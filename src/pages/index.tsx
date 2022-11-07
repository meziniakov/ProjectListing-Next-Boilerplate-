// @ts-ignore
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import type { IProject } from '@/types/project.interface'

import ItemList from '../components/ItemList'

type Props = {
  projects: IProject[]
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const count = query.count || 12

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/project/all?count=${count}`
  )
  const projects: Props = await res.json()
  return {
    props: {
      projects,
    },
  }
}

const Index = ({
  projects,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <h1 className="text-2xl font-bold">Каталог проектов</h1>
      <ItemList projects={projects} />
    </>
  )
}

export default Index
