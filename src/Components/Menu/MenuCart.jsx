import ImageEmptyCart from "/images/illustration-empty-cart.svg"

const MenuCart = ({ selectedProduct }) => {
    if (!selectedProduct) {
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
    return (
        <div>
            <div className=" min-h-[200px] w-[300px] bg-white py-2 mt-2 rounded-lg">
                <h3 className="ml-3 my-4 font-bold text-orange-700 text-lg">Your Cart (2)</h3>
                <div className="grid grid-cols-[3fr_1fr]">
                    <div className="ml-3">
                        <b>{selectedProduct.name}</b>
                        <div className="grid grid-cols-[0.6fr_2fr_1fr] justify-start">
                            <b className="text-orange-600">2x</b>
                            <span className="">6.50</span>
                            <span>$13.00</span>
                        </div>
                    </div>
                    <span className="flex items-center justify-center ml-auto mr-4">X</span>
                    <hr className="my-4 col-span-2 w-[93%] mx-auto" />
                </div>

                <div className="flex justify-between items-center mx-3">
                    <span>Order Total: </span>
                    <b>$6.50</b>
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