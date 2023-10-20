import { useEffect, useState } from "react";
import SingleBrand from "./SingleBrand";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/brands')
        .then(res=> res.json())
        .then(data=> setBrands(data))
    },[])
    return (
        <div>
            <div className="mt-10">
                <h2 className="text-center text-2xl font-medium">Brands</h2>
                <div className="grid grid-cols-6  m-2 gap-2 items-center mx-auto mt-16">
                    {
                        brands.map(brand=> <SingleBrand key={brand._id} brand={brand}></SingleBrand>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Brands;