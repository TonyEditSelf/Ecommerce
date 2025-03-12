import { useContext } from "react";
import { SidebarContext } from "./SideNav";
import { MyContext } from "../../context/ContextFile";
import footwearData from "../../data/footwear100";

const Sidenavcomp = () => {
    const filters = useContext(SidebarContext);

    const {
        inputdeskValue,
        setInputdeskValue,
        inputmobValue,
        setInputmobValue,
        selectedPriceRange,
        setSelectedPriceRange,
        selectedType,
        setSelectedType,
        selectedBrand,
        setSelectedBrand,
        selectedColour,
        setSelectedColour,
        setFilterData,
        filterProducts
    } = useContext(MyContext);

    const handleClick = () => {
        // Clear all filter values and reset to the full data set
        setInputdeskValue('');
        setInputmobValue('');
        setSelectedPriceRange('');
        setSelectedType('');
        setSelectedBrand('');
        setSelectedColour('');
        setFilterData(footwearData);
        filterProducts('');
    };

    const handleChecked = (title, label, setFilterFunction) => {
        // Clear all other filters before applying the selected one
        setInputdeskValue('');
        setInputmobValue('');
        setSelectedPriceRange('');
        setSelectedType('');
        setSelectedBrand('');
        setSelectedColour('');

        // Update the selected filter value and apply filter
        setFilterFunction(label);
        filterProducts(label, title);
    };

    // A mapping object for easier dynamic state setting
    const filterMap = {
        'Brands': setSelectedBrand,
        'Types': setSelectedType,
        'Price Range': setSelectedPriceRange,
        'Colours': setSelectedColour
    };

    return (
        <div className="hidden z-50 h-screen sm:flex sm:flex-col sm:gap-4 2xl:text-3xl">

            {/* Clear Filters Button */}
            <button
                onClick={handleClick}
                className="font-Poppins border border-gray-300 sm:w-10/12 lg:w-11/12 sm:mx-4 sm:mt-28 2xl:mt-44 sm:p-2 2xl:py-5 rounded-sm shadow-xs 2xl:text-2xl dark:text-white"
            >
                Clear Filters
            </button>

            {/* Render Filter Options */}
            {filters.map(({ title, data }) => {
                const groupName = `filter-${title.toLowerCase().replace(/\s/g, "-")}`;
                return (
                    <div key={title} className="sm:mx-4 sm:w-10/12 lg:w-11/12 md:mt-3 sm:p-4 border border-gray-300 shadow-xs bg-[#f5f5f5] dark:bg-[#1e2021] dark:text-white rounded-xs">
                        <h1 className="text-[#0077FF] font-Playfair-Display sm:text-xl font-bold sm:pb-2 2xl:text-3xl">
                            {title}
                        </h1>

                        <div className="font-Poppins text-base flex flex-col sm:gap-3 sm:mt-3 2xl:text-2xl">
                            {data.map(({ id, label }) => (
                                <label htmlFor={id} key={id} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name={groupName}
                                        id={id}
                                        className="accent-blue-500 2xl:text-3xl"
                                        onChange={() => handleChecked(title, label, filterMap[title])}
                                        value={label}
                                        checked={
                                            (title === 'Brands' && selectedBrand === label) ||
                                            (title === 'Price Range' && selectedPriceRange === label) ||
                                            (title === 'Types' && selectedType === label) ||
                                            (title === 'Colours' && selectedColour === label)
                                        }
                                    />
                                    <span>{label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Sidenavcomp;