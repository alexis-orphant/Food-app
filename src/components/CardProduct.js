import React from "react";

function CardProduct({img, name, description}) {
    return (
        <div className="rounded-xl relative">
            {/* overlate */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">{name}</p>
                <p className="px-2">{description}</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4">
                    Pedir Ahora
                </button>
            </div>
            <img
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                src={img}
                alt=""
            />
        </div>
    );
}

export default CardProduct;
