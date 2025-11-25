'use server'
import { revalidatePath } from "next/cache";
import z from "zod"


export async function addFoodAction(prevState,formData) {

  
  const validationSchima = z.object({
    title: z.string().min(3, "عنوان باید حداقل ۳ کاراکتر باشد"),
    description: z.string().min(5, "توضیحات خیلی کوتاه است"),
    ingredients: z.string().min(1, "حداقل یک ماده اولیه لازم است"),
    timeFood: z.number().min(1, "زمان را وارد کن"),
    image: z.string().min(10, "عکس نامعتبر است") 
    
  })

  const title = formData.get('title')
  const description = formData.get('description')
  const ingredients = formData.get('ingredients')
  const timeFood = formData.get('timeFood')
  const image = formData.get('image')


  const validations = validationSchima.safeParse({
    title,
    description,
    ingredients,
    timeFood: Number(timeFood),
    image
  })

  if (!validations.success) {
        const response={
         errors : validations.error?.flatten().fieldErrors,
        success : false
       }
       return response
  }


  await fetch("http://localhost:4000/recipes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(validations.data),
  })

  revalidatePath(`/recipes`)
  
    return {
    errors: {},
    success: true
  }
}
