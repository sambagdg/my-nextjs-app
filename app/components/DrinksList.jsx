import Image from "next/image";
import Link from "next/link";
import React from "react";

const DrinksList = ({drinks}) => {
    return (
        <ul className="grid sm:grid-cols-2 gap-4 mt-6 ">
            {drinks.map((drink) => {
                return <li key={drink.idDrink}>
                    <Link 
                        href={`/drinks/${drink.idDrink}`} 
                        className="text-xl font-medium text-gray-500"
                    >
                        <div className="relative h-48 mb-4">
                            <Image 
                                src={drink.strDrinkThumb} 
                                fill 
                                alt={drink.strDrink} 
                                sizes='(max-width:768px) 120vw (max-width: 12OOpx) 70vw' 
                                className="rounded-md object-cover opacity-90 hover:opacity-100 transition-opacity shadow-2xl"
                            />
                        </div>
                        {drink.strDrink}
                    </Link>
                </li>
            })}
        </ul>
    )
};
export default DrinksList;
