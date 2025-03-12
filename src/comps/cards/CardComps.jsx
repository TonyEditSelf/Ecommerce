import { FaRupeeSign, FaStar, FaRegStar } from "react-icons/fa";
import { useContext } from 'react';
import { MyContext } from '../../context/ContextFile.jsx';

const CardComps = () => {
    const { filterData } = useContext(MyContext);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-6 w-full mt-36 sm:mt-28 2xl:mt-44 pl-4 sm:pl-0'>
            {filterData.map(({ id, subCategory, articleType, baseColour, productDisplayName, image, currentPrice, prevPrice, discount, saved, starRating, reviews, brand }) => {
                const filledStars = Array(starRating).fill().map((_, i) => (<FaStar key={i} className='text-amber-300 h-5 w-5' />));
                const emptyStars = Array(5 - starRating).fill().map((_, i) => (<FaRegStar key={i} className='text-amber-300 h-5 w-5' />));

                return (
                    <div key={id} className="border border-gray-300 rounded-lg h-full p-4 shadow-lg bg-[#f5f5f5] dark:bg-[#1e2021]" >
                        <div className='flex flex-col gap-2 h-full'>
                            <div className='flex-1'>
                                <div className='flex flex-col gap-4'>
                                    <img
                                        className="m-auto object-cover w-6/12 rounded-lg hover:scale-110 3xl:hover:scale-95 transition-transform duration-300"
                                        src={`${import.meta.env.BASE_URL}${image}`}
                                        alt={`${brand} ${subCategory}`}
                                    />


                                    <h1 className="mt-3 font-Playfair-Display font-bold text-2xl 2xl:text-3xl text-gray-900 dark:text-white">{brand}</h1>
                                    <p className="mt-2 font-Poppins font-light cursor-pointer text-gray-700 dark:text-gray-300 hover:text-orange-400 transition-colors 2xl:text-2xl">{productDisplayName}</p>
                                    <p className='flex'>{filledStars} {emptyStars}</p>
                                    <p className="font-Poppins text-[#0077FF] cursor-pointer text-sm 2xl:text-2xl mt-1">{reviews}</p>
                                    <div className="font-Poppins flex items-center text-2xl 2xl:text-2xl mt-2 text-gray-900 dark:text-white">
                                        <FaRupeeSign />
                                        <del className="text-base 2xl:text-2xl text-gray-500 mr-2">{prevPrice}</del>
                                        <span className="font-semibold 2xl:text-3xl">{currentPrice}</span>
                                        <span className="text-sm 2xl:text-3xl ml-1 text-gray-600 dark:text-gray-400">M.R.P.</span>
                                    </div>
                                </div>
                            </div>
                            <div className='font-Poppins flex justify-center'>
                                <button className="mt-4 w-full 2xl:text-2xl bg-[#0077FF] hover:bg-[#0056D2] text-white font-medium py-2 rounded-lg transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardComps;