

export async function GET(req, { params }) {
    const {id} = params
    const res = await fetch(`http://localhost:4000/comments?recipeId=${id}`)
    const data=res.json()
    return Response.json(data)
}


export async function POST(req,{params}) {
    const {id}=params
  const { name, text } = await req.json()
    const newComment={name, text ,recipeId:Number(id)}

 const res = await fetch(`http://localhost:4000/comments`,{
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newComment)
 })
   const data = await res.json();
//    return Response.json(data);
   return Response.json({ message: "ثبت شد ✅", comment: data })
}