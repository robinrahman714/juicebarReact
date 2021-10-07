import React, { useState, useEffect } from 'react'

import SingleProducts from './../SingleProducts/SingleProducts';

const Products = () => {

    // fetching data
    const [data, setData] = useState([]);
    const [searchText, setsearchText] = useState("a");

    useEffect(() => {

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [searchText])

    const handleEvent = (e) => {
        const text = e.target.value;
        setsearchText(text);
    }

    return (
        <div>
            <div>
                <h2 className="m-8 text-2xl"> We Provide free lesson for our drinks <br /> So that you can make drinks following our recipe at home and enjoy your day!  </h2>
            </div>
            <div className="mt-6">
                <input className="m-1 h-10 w-60" type="text" onChange={handleEvent} placeholder="Search your favorite drink" />
                <button className="p-2 m-2 w-24 font-bold bg-green-400 hover:bg-yellow-400 rounded-md">Search</button>
            </div>
            <div>
                {
                    data.map(drink => <SingleProducts key={drink.idDrink} drink={drink} />)
                }
            </div>
        </div>
    )
}

export default Products
