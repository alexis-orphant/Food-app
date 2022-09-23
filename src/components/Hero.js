import React from "react";
import { data } from "../data/data";

function Hero() {
    return (
        <div className="max-w-full mx-auto p-4 ">
            <div className="max-h-[500px] relative">
                {/* overlay */}
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        La <span className="text-orange-500">Mejor</span>
                    </h1>
                    <h2 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        <span className="text-orange-500">Comida</span> por
                        Delivery
                    </h2>
                </div>
                <img
                    className="w-full max-h-[500px] object-cover"
                    src={data[3].image}
                    alt="Hamburguesa"
                />
            </div>
        </div>
    );
}

export default Hero;
