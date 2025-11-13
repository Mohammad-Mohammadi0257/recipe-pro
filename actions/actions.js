'use server'

import { revalidatePath } from "next/cache"


export async function addComment(formData) {

    const recipeId=formData.get('recipeId')
    const name=formData.get('name')
    const text=formData.get('text')
    
       const res=await fetch('http://localhost:4000/comments',{
        method:'POST',
        headers:{ "Content-Type": "application/json" },
        body:JSON.stringify({name , text ,recipeId})
       })

       revalidatePath(`/recipes/${recipeId}`)

}