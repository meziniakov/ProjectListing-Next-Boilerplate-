import ItemCard from '../ItemCard'

const ItemList = ({ items }) => {

  return (
    <section>
      <div className="container mx-auto mt-7 gap-7">
        <div className="flex flex-wrap -mx-3">
          {items
            // .slice(0, next)
            .map((item, i) => (
              <ItemCard key={i} item={item}/>
            ))}
        </div>
      </div>
    </section>
  )
}

export default ItemList