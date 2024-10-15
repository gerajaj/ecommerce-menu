import MenuCard from "./MenuCard";
import MenuCart from "./MenuCart";
import menuItems from "../Data/Product_data.json"
import { useState } from "react";

const MenuMain = () => {
    const [selectedProduct, setSelectedProduct] = useState(null)


    return (
        <>
            <div className="font-bold text-4xl">
                Desserts
            </div>
            <div className="grid md:grid-cols-[3fr_1fr] border md:w-[750px] lg:w-[1000px] ">
                <MenuCard
                    menuItems={menuItems}
                    setSelectedProduct={setSelectedProduct}
                />
                <MenuCart selectedProduct={selectedProduct} />
            </div>

        </>
    )
}

export default MenuMain;