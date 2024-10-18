
import HeaderMain from "./Components/Header/HeaderMain";
import MenuMain from "./Components/Menu/MenuMain"
import backgroundImage from "./assets/wallpaper.webp"

const App = () => {
    return (
        <div className=" h-full bg-opacity-10 bg-fixed bg-center bg-cover " style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="bg-rose-50 bg-opacity-85">

                <div className="md:w-[750px] lg:w-[1000px] w-[300px] mx-auto pb-4">
                    <HeaderMain />
                    <div >
                        <MenuMain className="col-span-3" />

                    </div>
                    <footer className="bg-rose-200  bg-opacity-80">
                        <div className="mx-4 flex justify-between py-4">

                            <div className="grid items-center">
                                <a href="">Lorem ipsum blablabla</a>
                                <a href="">Lorem ipsum blablabla</a>
                                <a href="">Lorem ipsum blablabla</a>
                                <a href="">Lorem ipsum blablabla</a>
                            </div>
                            <a href="">Lorem ipsum blablabla</a>
                            <a href="">Lorem ipsum blablabla</a>
                            <a href="">Lorem ipsum blablabla</a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}
export default App;