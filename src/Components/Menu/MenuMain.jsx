import MenuCard from "./MenuCard";
import MenuCart from "./MenuCart";
import menuItems from "../Data/Product_data.json"
import { useState } from "react";

const MenuMain = () => {

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        console.log("handled")

        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                if (existingItem.quantity < 10) {

                    //Verifies if the new quantity is under 10 pieces of each product
                    return prevItems.map(cartItem =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    );
                } else {

                    //Showing the message
                    alert("Sorry you cannot order more than 10 pieces of each product");

                    return prevItems;  //No modifitactions
                }
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });

    }

    const updateItemQuantity = (id, change) => {
        setCartItems(prevItems => {
            return prevItems.map(cartItem => {
                if (cartItem.id === id) {
                    const newQuantity = cartItem.quantity + change;
                    if (change > 0 && newQuantity > 10) {
                        alert("Sorry you cannot order more than 10 pieces of each product");
                        return cartItem;
                    }
                    return { ...cartItem, quantity: Math.max(newQuantity, 0) }
                }
                return cartItem;
            })

        })
    }


    return (
        <>
            <div className="font-bold text-4xl">
                Desserts
            </div>
            <div className="grid md:grid-cols-[3fr_1fr] border md:w-[750px] lg:w-[1000px] ">
                <MenuCard
                    menuItems={menuItems}
                    /* setSelectedProduct={setSelectedProduct} */
                    handleAddToCart={handleAddToCart}
                />
                <MenuCart /* selectedProduct={selectedProduct} */
                    cartItems={cartItems} updateItemQuantity={updateItemQuantity}
                />
            </div>

        </>
    )
}

export default MenuMain;