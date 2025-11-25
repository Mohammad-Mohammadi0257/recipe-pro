'use client'
import axios from 'axios';
import Link from 'next/link';



const Cards = ({setListData,id,time,food,description,image}) => {

    const deleteItem=async(e)=>{
        e.stopPropagation();
        const res= await axios.delete(`http://localhost:4000/recipes/${id}`)
        if (res.status==200) {
            setListData(old=>old.filter(d=>d.id !=id))
        }
            
    }

    return (
        <div className="card bg-base-100 shadow-sm h-[375px] w-[340px] sm:w-60 md:w-[220px]">
        <Link href={`/recipes/${id}`}>
            <figure className="h-48 w-full overflow-hidden">
            <img className="w-full h-full object-cover" src={image} alt={food} />
            </figure>
        </Link>

        <div className="card-body gap-y-3">
            <h2 className="card-title text-2xl h-12">
            <Link href={`/recipes/${id}`}>{food}</Link>
            <div className="badge badge-secondary">NEW</div>
            </h2>

            <p className="text-base h-12 line-clamp-2">
            {description}
            </p>

            <div className="card-actions flex justify-between items-center">
            <div dir="rtl" className="badge badge-outline">{time} دقیقه</div>
            <button
                className="badge badge-outline"
                onClick={(e) => {
                e.stopPropagation();
                deleteItem(e);
                }}>
                حذف
            </button>
    </div>
  </div>
</div>

        );

}

export default Cards;
