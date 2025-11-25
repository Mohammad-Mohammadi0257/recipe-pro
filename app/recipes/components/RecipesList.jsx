'use client'
import Cards from '@/components/ui/Cards';
import { useState } from 'react';

const RecipesList = ({data}) => {

const [listData, setListData] = useState(() => data);



    return (
        <div className="p-8 grid grid-cols-1 items-start justify-items-center 
                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {
          listData.map(d=>(
            <Cards key={d.id} data={data} id={d.id} food={d.title} description={d.description}
            deg={d.difficulty} time={d.timeFood} image={d.image} listData={listData} setListData={setListData}/>
          ))
        }
        </div>
    );
}

export default RecipesList;
