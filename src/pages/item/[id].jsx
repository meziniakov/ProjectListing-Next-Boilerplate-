import { useRouter } from "next/router"
import SingleItem from '../../components/SingleItem'
import data from '../../data/items.js'

const ItemById = () => {
  const {query, basePath} = useRouter()
  
  const item = data.filter(item => item["ИНН"] == query.id)[0]
  return (
    <SingleItem item={item} />
  )
}
export default ItemById