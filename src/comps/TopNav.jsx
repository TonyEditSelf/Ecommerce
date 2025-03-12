import { CiHeart, CiUser } from "react-icons/ci";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import { useContext } from "react";
import { MyContext } from "../context/ContextFile";

const TopNav = () => {
    const {
        inputdeskValue,
        inputmobValue,
        setInputdeskValue,
        setInputmobValue,
        selectedPriceRange,
        setSelectedPriceRange,
        selectedType,
        setSelectedType,
        selectedBrand,
        setSelectedBrand,
        selectedColour,
        setSelectedColour,
        filterProducts
    } = useContext(MyContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setInputdeskValue(value);
        filterProducts(value);
    };

    const handleMobChange = (e) => {
        const value = e.target.value;
        setInputmobValue(value);
        filterProducts(value);
    };

    const handleFilterChange = (e) => {
        const selectedValue = e.target.value;
        const filterCategory = selectedValue.split(':')[0];
        const filterValue = selectedValue.split(':')[1];

        // Clear all filters before applying the selected one
        setInputdeskValue('');
        setInputmobValue('');
        setSelectedPriceRange('');
        setSelectedType('');
        setSelectedBrand('');
        setSelectedColour('');

        // Apply the selected filter
        switch (filterCategory) {
            case 'brands':
                setSelectedBrand(filterValue);
                filterProducts(filterValue, 'Brands');
                break;
            case 'types':
                setSelectedType(filterValue);
                filterProducts(filterValue, 'Types');
                break;
            case 'priceRange':
                setSelectedPriceRange(filterValue);
                filterProducts(filterValue, 'Price Range');
                break;
            case 'colours':
                setSelectedColour(filterValue);
                filterProducts(filterValue, 'Colours');
                break;
            default:
                break;
        }
    };

    return (
        <>
            {/* Top Navbar (Fixed) */}
            <div className="fixed top-0 w-full bg-[#f5f5f5] dark:bg-[#1e2021] border-b border-gray-300 z-20">
                {/* Large Screens Layout */}
                <div className="hidden sm:flex items-center justify-between sm:gap-3 px-5 sm:px-10 py-2 2xl:py-8">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img
                            className="h-14 z-20 w-14 md:h-16 md:w-16 object-contain"
                            src={`${import.meta.env.BASE_URL}shoekart.png`}
                            alt="ShopKart Logo"
                        />
                    </div>

                    {/* Search Bar - Centered */}
                    <div className="flex-grow mx-4">
                        <div className="relative">
                            <input
                                className="font-Poppins border border-gray-300 dark:text-white rounded-full px-4 py-2 w-full pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 2xl:text-3xl"
                                type="text"
                                autoFocus
                                placeholder="Search for products..."
                                value={inputdeskValue}
                                onChange={handleChange}
                            />
                            <FiSearch className="absolute left-3 top-3 text-gray-500 text-xl 2xl:text-3xl" />
                        </div>
                    </div>

                    {/* Icons Section */}
                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-200 text-2xl 2xl:text-3xl">
                        <MdOutlineDarkMode className="cursor-pointer" />
                        <CiHeart className="cursor-pointer" />
                        <FiShoppingCart className="cursor-pointer" />
                        <CiUser className="cursor-pointer" />
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="sm:hidden flex items-center px-5 py-2 gap-3">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img
                            className="h-14 z-20 w-14 object-contain"
                            src={`${import.meta.env.BASE_URL}shoekart.png`}
                            alt="ShopKart Logo"
                        />
                    </div>

                    {/* Mobile Search Bar (Inline with Logo) */}
                    <div className="flex-grow relative">
                        <input
                            className="dark:text-white border border-gray-300 rounded-full px-4 py-2 w-full pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Search for products..."
                            value={inputmobValue}
                            onChange={handleMobChange}
                        />
                        <FiSearch className="absolute left-3 top-2.5 text-gray-500 text-xl" />
                    </div>
                </div>

                {/* Mobile Filter Dropdown (Single Select) */}
                <div className="sm:hidden flex justify-between gap-2 px-6 pb-3 text-gray-500 dark:text-gray-300 text-2xl shadow-md">

                    <div className="dark:text-white text-base w-full">
                        <select
                            onChange={handleFilterChange}
                            className="block w-full bg-white dark:bg-[#333] dark:text-white border border-gray-300 dark:border-[#444] rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
                        >
                            <option value="" className="text-gray-500">Select Filter</option>

                            {/* Section Title: Brands */}
                            <option value="" disabled className="text-gray-500">____________</option>
                            <option value="" disabled className="font-semibold">Brands</option>
                            <option value="brands:Nike" className="hover:bg-gray-100 dark:hover:bg-[#555]">Nike</option>
                            <option value="brands:Adidas" className="hover:bg-gray-100 dark:hover:bg-[#555]">Adidas</option>
                            <option value="brands:Puma" className="hover:bg-gray-100 dark:hover:bg-[#555]">Puma</option>
                            <option value="brands:Fila" className="hover:bg-gray-100 dark:hover:bg-[#555]">Fila</option>
                            <option value="brands:Lotto" className="hover:bg-gray-100 dark:hover:bg-[#555]">Lotto</option>

                            {/* Section Title: Price Range */}
                            <option value="" disabled className="text-gray-500">____________</option>
                            <option value="" disabled className="font-semibold">Price Range</option>
                            <option value="priceRange:0 - 1000" className="hover:bg-gray-100 dark:hover:bg-[#555]">0 - 1000</option>
                            <option value="priceRange:1000 - 3000" className="hover:bg-gray-100 dark:hover:bg-[#555]">1000 - 3000</option>
                            <option value="priceRange:3000 & Above" className="hover:bg-gray-100 dark:hover:bg-[#555]">3000 & Above</option>

                            {/* Section Title: Colours */}
                            <option value="" disabled className="text-gray-500">____________</option>
                            <option value="" disabled className="font-semibold">Colours</option>
                            <option value="colours:Red" className="hover:bg-gray-100 dark:hover:bg-[#555]">Red</option>
                            <option value="colours:Blue" className="hover:bg-gray-100 dark:hover:bg-[#555]">Blue</option>
                            <option value="colours:Black" className="hover:bg-gray-100 dark:hover:bg-[#555]">Black</option>

                            {/* Section Title: Types */}
                            <option value="" disabled className="text-gray-500">____________</option>
                            <option value="" disabled className="font-semibold">Types</option>
                            <option value="types:Casual Shoes" className="hover:bg-gray-100 dark:hover:bg-[#555]">Casual Shoes</option>
                            <option value="types:Formal Shoes" className="hover:bg-gray-100 dark:hover:bg-[#555]">Formal Shoes</option>
                            <option value="types:Sports Shoes" className="hover:bg-gray-100 dark:hover:bg-[#555]">Sports Shoes</option>
                            <option value="types:Heels" className="hover:bg-gray-100 dark:hover:bg-[#555]">Heels</option>
                        </select>
                    </div>

                    {/* Icons Section */}
                    <div className="flex items-center gap-4">
                        <MdOutlineDarkMode className="cursor-pointer" />
                        <CiHeart className="cursor-pointer" />
                        <FiShoppingCart className="cursor-pointer" />
                        <CiUser className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopNav;
