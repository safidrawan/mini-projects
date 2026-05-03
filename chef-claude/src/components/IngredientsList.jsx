export default function IngredientsList(props) {
  const ingredientsItems = props.ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));
  return (
    <>
      {ingredientsItems.length>0 && <div className="ingredients">
        <h1>Ingredients List:</h1>
        <ul>{ingredientsItems}</ul>
      </div>}
    {ingredientsItems.length>2 &&   <section className="get-recipe">
        <div className="text" ref={props.ref}>
          <h2>Ready for a recipe?</h2>
          <p>Generate a recipe for your list of ingredients.</p>
        </div>
        <button onClick={props.toggleShowRecipe}>Get Recipe</button>
      </section>}
    </>
  );
}
