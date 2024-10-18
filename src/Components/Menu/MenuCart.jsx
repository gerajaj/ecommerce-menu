import ImageEmptyCart from "/images/illustration-empty-cart.svg"

const MenuCart = ({ cartItems, updateItemQuantity }) => {
    console.log("Cart items", cartItems)
    if (cartItems.length === 0) {
        return (
            <div>
                <div className=" min-h-[200px] w-[300px] bg-white py-2 mt-2 rounded-lg">
                    <h3 className="my-4 font-bold text-orange-700 text-lg text-center">Your Cart is empty</h3>
                    <hr className="w-[90%] bg-gray-400 h-[1px] mx-auto"></hr>
                    <img src={ImageEmptyCart} alt="" className="mx-auto opacity-90" />
                </div>
            </div>
        )
    }

    const totalOrder = cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)

    return (
        <div>
            <div className=" min-h-[200px] w-[300px] bg-white py-2 mt-2 rounded-lg">
                <h3 className="ml-3 my-4 font-bold text-orange-700 text-lg">Your Cart ({cartItems.length})</h3>
                {cartItems.map(item => (
                    <div key={item.id} className="grid grid-cols-[3fr_1fr]">
                        <div className="ml-3">
                            <b>{item.name}</b>
                            <div className="grid grid-cols-[1.2fr_0.2fr_1fr_1fr] justify-start items-center">
                                <div className="bg-orange-600 w-[80px] py-1 rounded-full  justify-between flex text-white font-bold items-center">
                                    <button className="ml-1 border border-white rounded-full w-6 h-6 hover:bg-white hover:text-orange-600"
                                        onClick={() => item.quantity > 0 && updateItemQuantity(item.id, -1)}
                                    >-</button>
                                    <b className="text-white mx-1">{item.quantity}</b>
                                    <button className="w-6 h-6 mr-1 rounded-full border border-white hover:bg-white hover:text-orange-600"
                                        onClick={() => updateItemQuantity(item.id, 1)}
                                    >+</button>
                                </div>
                                <b className="text-orange-500 ml-1">x</b>
                                <span className="ml-1">{item.price.toFixed(2)}</span>
                                <span className="ml-auto ">{item.quantity * item.price.toFixed(2)}</span>
                            </div>
                        </div>
                        <span className="flex items-center justify-center ml-auto mr-4">X</span>
                        <hr className="my-4 col-span-2 w-[93%] mx-auto" />
                    </div>
                ))}
                <div className="flex justify-between items-center mx-3">
                    <span>Order Total: </span>
                    <b>${totalOrder}</b>
                </div>

                <div className="grid items-center justify-center my-4 mx-auto">
                    <div className="mb-4 bg-slate-100 py-2 px-2 rounded-lg">
                        <img src="" alt="" />
                        <span>This is a <b>carbon-neutral</b> delivery</span>
                    </div>
                    <button className="bg-orange-600 w-[250px] mx-auto py-2 rounded-full text-center text-white font-semibold">
                        Confirm Order
                    </button>
                </div>

            </div>
        </div>
    )
}

export default MenuCart;