import { useState } from "react";



const ScoreCart = () => {
    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(prev => prev + 1)

    };

    const handleMinus = () => {
        if (count > 0) {
            setCount(prev => prev - 1);
        }
    };

    return (
        <>
            <div className=" bg-orange-600 w-40 mx-auto rounded-full py-2">
                <div className="flex items-center justify-between mx-4 text-white font-bold">

                    <button className="border rounded-full w-6 hover:bg-white hover:text-orange-600" onClick={handleMinus}> - </button>
                    <span>{count}</span>
                    <button className="border rounded-full w-6 hover:bg-white hover:text-orange-600" onClick={handlePlus}> + </button>
                </div>
            </div>
        </>
    )
}
export default ScoreCart;