import Data from "./Data"


export default async function Page({ params }) {
  const { id } = params
  const resRecipe = await fetch(`http://localhost:4000/recipes/${id}`)
  const recipe = await resRecipe.json()

  const resComments = await fetch(`http://localhost:4000/comments?recipeId=${id}`)
  const comments = await resComments.json()

  return <Data id={id} data={recipe} comments={comments} />
}
