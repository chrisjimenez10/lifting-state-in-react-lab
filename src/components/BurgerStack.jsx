

const BurgerStack = (props) => {
    const {stack, removeFromBurger} = props;
    
    const handleRemoveBurger = (ingredient, index) => {
        removeFromBurger(ingredient, index);
    };

    return (
            <ul>
                {/* {stack.map((ingredient, index)=>{
                    return (
                        <li key={index} style={{backgroundColor: `${ingredient.color}`}}>
                            {ingredient.name}
                            <button onClick={()=> handleRemoveBurger(ingredient, index)}>-</button>
                        </li>
                    )
                    })} */}
       
                    {stack.length === 0 ? <h2>No Ingredients</h2> : stack.map((ingredient, index)=>{
                        return (
                            <li key={index} style={{backgroundColor: `${ingredient.color}`}}>
                                {ingredient.name}
                                <button onClick={()=> handleRemoveBurger(ingredient, index)}>-</button>
                            </li>
                        )
                    })}
            </ul>
                               
    )
  };
  
  export default BurgerStack;
  