

const IngredientList = (props) => {
   const {availableIngredients, addToBurger} = props;
   

    const handleAddBurger = (ingredient) => {
        addToBurger(ingredient);
    };
    
    return (
        <ul>
            {availableIngredients.map((ingredient, index)=>{
                return (
                    <li key={index} style={{backgroundColor: `${ingredient.color}`}}>
                        {ingredient.name}
                        <button onClick={() => handleAddBurger(ingredient)}>+</button>
                    </li>
                )
            })}
            
        </ul>
    )
  };
  
  export default IngredientList;
  