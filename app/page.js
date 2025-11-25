'use client'
import BtnDialog from "@/components/ui/BtnDialog";
import RecipesList from "./recipes/components/RecipesList";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  
  // const res = await fetch("http://localhost:4000/recipes", {
  //   next: { revalidate: 2 }, // برای ISR (اختیاری)
  // });

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:4000/recipes", 
      { cache: "no-store" });
      
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (!data || data.length === 0) return <p>هیچ غذایی وجود ندارد.</p>;

  return (
    <div className='flex flex-col mt-3'>
      <BtnDialog onSuccess={fetchData}>
        ثبت غذای جدید
      </BtnDialog>

      <RecipesList data={data} />
    </div>
  );
}
