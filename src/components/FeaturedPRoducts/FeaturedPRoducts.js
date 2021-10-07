import React, { useContext } from 'react'
import { drinkContext } from '../../App'
import "./Featured.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail, faGlassCheers, faGlasses} from '@fortawesome/free-solid-svg-icons';
const FeaturedPRoducts = () => {
    const data = useContext(drinkContext);
    const glass = <FontAwesomeIcon icon={faCocktail}></FontAwesomeIcon>;
    return (
        <div className="px-40">
            <h1 className="text-5xl font-bold text-center pb-14">Our Best Shots </h1>
            <div className="grid grid-cols-3 gap-2">
                {
                    data.map(drink => {
                        return (
                            <div className="drink flex items-center justify-center flex-col">
                                <img className="drink-img w-72 border-8 hover:border-blue-300" src={drink.strDrinkThumb} alt={drink.strDrink} />
                                <h1 className="m-8 pt-2 text-xl font-bold w-32 h-12 bg-green-400 rounded-md">{glass} {drink.strDrink} </h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FeaturedPRoducts
