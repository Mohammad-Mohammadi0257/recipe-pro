'use server'
import z from "zod"

const recipeSchema = z.object({
  title: z.string().min(3, "عنوان باید حداقل ۳ کاراکتر باشد"),
  description: z.string().min(10, "توضیحات خیلی کوتاه است"),
  ingredients: z.array(
    z.object({
      name: z.string().min(1, "نام ماده نباید خالی باشد"),
      amount: z.string().min(1, "مقدار نباید خالی باشد"),
    })
  ).min(1, "حداقل یک ماده اولیه لازم است"),
})

export async function addFoodAction(formData) {
  const title = formData.get('name')
  const description = formData.get('description')
  const ingredientsRaw = formData.get('ingredients') // مثلا "آب - 1 لیتر, شکر - 2 قاشق"

  if (!ingredientsRaw) throw new Error("مواد اولیه خالی است")

  // جدا کردن مواد اولیه با ویرگول یا سایر جداکننده‌ها
  const ingredients = ingredientsRaw
    .split(/[،,]+/) // جداکننده بین مواد مختلف
    .map(item => {
      const parts = item.split(/[-:–—]+/).map(p => p.trim()).filter(Boolean)
      return { name: parts[0] || "", amount: parts[1] || "" }
    })
    .filter(i => i.name && i.amount)


  // اعتبارسنجی با Zod
  const parsed = recipeSchema.safeParse({ title, description, ingredients })
  if (!parsed.success) {
    console.log(parsed.error)
    throw new Error("داده‌ها نامعتبر هستند")
  }

  await fetch("http://localhost:4000/recipes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parsed.data),
  })
}
