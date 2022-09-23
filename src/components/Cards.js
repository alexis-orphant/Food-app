import React from "react";
import CardProduct from "./CardProduct";

function Cards() {
    return (
        <div className="max-w-[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* card */}
            <CardProduct
                img="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600"
                name="Sun's Out, BOGO"
                description="Durante 26/8"
            />
            <CardProduct
                img="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600"
                name="Nuevos Restaurantes"
                description="Agregados diariamente"
            />
            <CardProduct
                img="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=600"
                name="Repartimo Postres"
                description="Postres Sabrosos"
            />
        </div>
    );
}

export default Cards;
