import { useRouter } from 'next/router';

import ItemList from '../components/ItemList'

import items from '../data/items.js'

const Index = () => {
  const router = useRouter();
  
  return (
    <>
      <h1 className="text-2xl font-bold">
        Каталог проектов
      </h1>
            <ItemList items={items} />
    </>
  );
};

export default Index;
