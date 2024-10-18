import AddToCart from "../Buttons/AddToCart";



const MenuCard = ({ menuItems, handleAddToCart }) => {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-3 md:mt-2 mx-auto md:mx-0">
                {menuItems.map((item) => (

                    <div key={item.id} className="mx-auto ml-0">

                        <span>
                            <img src={item.image.desktop} alt={item.name} className=" w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-52 lg:h-52 rounded-lg hover:border-2 hover:border-orange-600  "
                            />
                        </span>
                        <div
                            className="grid items-center justify-center"
                        >
                            <AddToCart onClick={() => handleAddToCart(item)} />
                        </div>
                        <div className=" bg-white min-h-[60px] py-2 md:w-[200px] lg:w-[208px] w-[150px] rounded-lg  mx-auto mb-4">
                            <div className="grid mx-2">

                                <i className="text-sm text-gray-500">{item.category}</i>
                                <b className="text-[14px] ">{item.name}</b>
                                <span className="font-bold  text-orange-600">$ <span>{item.price.toFixed(2)}</span></span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default MenuCard;