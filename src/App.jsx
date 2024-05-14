//Import
import './App.css';
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';
import {useState} from "react";

//Export Data
export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

//Parent Component
const App = () => {

  //State
  const [stack, setStack] = useState([]);

  //Functions
  const addToBurger = (ingredient) => {
    setStack([ingredient, ...stack]); //Here, by placing the NEW ingredient being added FIRST, the UI displays the newest ingredient as being stacked on TOP of the previous ingredient - if we persist the curent state first, then the newly added ingredient appears in the bottom of the stack
    console.log(stack)
  };

  const removeFromBurger = (ingredient, mainIndex) => {
    const updatedStack = [...stack].filter((ingredient, subIndex)=>{
      return subIndex !== mainIndex;
    })
    
    setStack(updatedStack)
    console.log(updatedStack)
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>

        {/* I tried to map() through the data FIRST, but it messed up the CSS - It is better to let the component handle the mapping of the data  */}
        <IngredientList availableIngredients={availableIngredients} addToBurger={addToBurger}/>

        <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>

      </section>
    </main>
  );
};

export default App;

