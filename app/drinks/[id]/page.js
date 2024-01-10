import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import drinkImg from './drink.jpg'
import Image from 'next/image';

const getSingleDrink = async (id) =>{
    const res = await fetch(`${url}${id}`);
    if (!res.ok) {
        throw new Error('recupération de la boisson echouée...')
    }
    return res.json();
}

const SingleDrinkPage = async({ params }) => {
    const data = await getSingleDrink(params.id)
    const title = data?.drinks[0]?.strDrink;
    const imgStr = data?.drinks[0]?.strDrinkThumb;

    return (
        <div >
            <Link href='/drinks' className='btn bg-white font-normal text-gray-900 mt-8 mb-4 shadow-2xl'>Retour à la liste des boissons</Link>
            <div className=''>
                <Image 
                    src={imgStr} 
                    width={300} 
                    height={300} 
                    className='w-48 h-48 rounded-lg shadow-lg mb-4 opacity-90 hover:opacity-100 transition' 
                    priority 
                    alt={title}
                />
                {/* <Image src={drinkImg} className='w-48 h-48 rounded-lg mb-4 opacity-90 hover:opacity-100 transition'/> */}
                <h1 className='text-2xl mb-8 text-gray-500'>{title}</h1>
            </div>
            
        </div>
    );
};
export default SingleDrinkPage;
