'use client'
import Link from 'next/link';
import React from 'react';



const Cards = ({id,time,deg,food,description,image}) => {
    return (
        
        <Link href={`/recipes/${id}`}>
            <div className="card bg-base-100 shadow-sm h-[375px] w-[340px]
             sm:w-60 md:w-[220px]">
             <figure className="h-48 w-full overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt={food}
                />
            </figure>
            <div className="card-body gap-y-3">
                <h2 className="card-title text-2xl h-12">
                {food}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='self-start h-autoself-start text-base h-12 line-clamp-2'>
                  {description}
                   </p>
                <div className="card-actions justify-end">
                <div dir="rtl" className="badge badge-outline">{time} دقیقه</div>
                <div className="badge badge-outline">{deg}</div>
                </div>
            </div>
            </div>
            </Link>
      
        );

}

export default Cards;
