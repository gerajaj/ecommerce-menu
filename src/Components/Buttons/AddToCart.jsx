import IconAddToCart from "../icons/IconAddToCart";

const AddToCart = ({ onClick }) => {
    return (
        <>
            <button onClick={onClick} className="flex bg-white w-40 items-center justify-center rounded-full mx-auto -mt-6 mb-1 py-[10px] gap-x-2">
                <IconAddToCart />
                <span>Add to Cart</span>
            </button>
        </>
    )
}

export default AddToCart;