import { createContext } from "react";
import Sidenavcomp from "./Sidenavcomp";

export const SidebarContext = createContext();

const SideNav = () => {

    const filters = [
        {
            title: 'Price Range', data: [
                { id: "01000", label: "0 - 1000" },
                { id: "10003000", label: "1000 - 3000" },
                { id: "30005000", label: "3000 & Above" },
            ]
        },
        {
            title: 'Brands', data: [
                { id: "puma", label: "Puma" },
                { id: "fila", label: "Fila" },
                { id: "adidas", label: "Adidas" },
                { id: "lotto", label: "Lotto" },
                { id: "nike", label: "Nike" }
            ]
        },
        {
            title: 'Types', data: [
                { id: "casual-shoes", label: "Casual Shoes" },
                { id: "formal-shoes", label: "Formal Shoes" },
                { id: "sports-shoes", label: "Sports Shoes" },
                { id: "heels", label: "Heels" }
            ]
        },
        {
            title: 'Colours', data: [
                { id: "black", label: "Black" },
                { id: "white", label: "White" },
                { id: "brown", label: "Brown" },
                { id: "red", label: "Red" },
            ]
        }
    ];


    return (
        <div>

            <SidebarContext.Provider value={filters}>
                <Sidenavcomp />
            </SidebarContext.Provider>

        </div>
    );
};

export default SideNav;
