import { useEffect, useState } from "react"

import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";

export default function AllProducts() {

    const [ products, setProducts ] = useState( []);

    useEffect   (() => {
        fetch('http://localhost:3000/shoes')
        .then(res => res.json())
        .then((data) => setProducts(data));

    }, [])

    const handleDeleteProduct = (id) => {
      setProducts(products.filter (product => product.id !== id))
    }

  return (
    <div>
        <h1 className="text-5xl font-bold text-center"> All Products</h1>
        <div className="my-16 flex gap-4 flex-wrap">
 

      {
                    products.map ((shoe) => 
                        <SingleProductCardDashboard 
                        key={shoe.id}
                            shoe = {shoe}
                            onDelete={handleDeleteProduct}
                        />
                    )
                }
        
          
        </div>
    </div>
  )
}
