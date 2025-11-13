
import BtnDialog from "@/components/ui/BtnDialog";
import { PiCookingPotBold } from "react-icons/pi";
import Cards from "@/components/ui/Cards";

export default async function Home() {

  const res = await fetch("http://localhost:4000/recipes", {
    next: { revalidate: 10 }, // برای ISR (اختیاری)
  });

  const data = await res.json();

  return (
    <div className='flex flex-col mt-3'>

      <BtnDialog >
        ثبت غذای جدید
      </BtnDialog>

        <div className="p-8 grid grid-cols-1 items-start justify-items-center 
        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
        {
          data.map(d=>(
            <Cards key={d.id} id={d.id} food={d.title} description={d.description}
            deg={d.difficulty} time={d.prepTime} image={d.image}/>
          ))
        }

      </div>
    </div>
  );
}

