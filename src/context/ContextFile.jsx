import { createContext, useState } from "react";
import footwearData from "../data/footwear100";

export const MyContext = createContext();

const ContextFile = ({ children }) => {

    const [inputdeskValue, setInputdeskValue] = useState('');
    const [inputmobValue, setInputmobValue] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedColour, setSelectedColour] = useState('');
    const [filterData, setFilterData] = useState(footwearData);

    const filterProducts = (searchTerm, title) => {

        let filtered = [...footwearData];

        // Filter by Price Range
        if (searchTerm && title === 'Price Range') {
            let min, max;

            if (searchTerm === "0 - 1000") {
                min = 0;
                max = 1000;
            } else if (searchTerm === "1000 - 3000") {
                min = 1000;
                max = 3000;
            } else if (searchTerm === "3000 & Above") {
                min = 3000;
                max = Infinity;
            }

            filtered = filtered.filter(({ currentPrice }) => (
                currentPrice >= min && currentPrice <= max
            ));
        }
        // Filter based on search term in productDisplayName, articleType, or baseColour
        else if (searchTerm && title !== 'Price Range') {

            filtered = filtered.filter(({ productDisplayName, articleType, baseColour }) => (
                productDisplayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                articleType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                baseColour.toLowerCase().includes(searchTerm.toLowerCase())
            ));
        }
        // Reset the filter if no search term and title is not 'Price Range'
        else if (!searchTerm && title !== 'Price Range') {
            filtered = footwearData; // Reset to the full data if no search term is entered
        }

        // Update the filterData state with the filtered data
        setFilterData(filtered);
    };

    return (
        <MyContext.Provider value={{
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
            filterData,
            setFilterData,
            filterProducts
        }}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextFile;
