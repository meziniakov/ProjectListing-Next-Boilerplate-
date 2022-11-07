import SingleItem from '../../components/SingleItem'

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getStaticProps = async (ctx) => {
  const { INN } = ctx.params

  const res = await fetch(`${BASE_URL}/api/project/${INN}`)
  const item = await res.json()

  return {
    props: {
      item,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${BASE_URL}/api/project/all`)
  console.log('BASE_URL', BASE_URL)
  const projects = await res.json()

  const paths = projects.map((project) => ({
    params: { INN: project['ИНН'] },
  }))

  return { paths, fallback: false }
}

const ItemById = ({ item }) => {
  return <SingleItem item={item} />
}
export default ItemById
