import React, { useEffect, useState } from "react"
import { getProducts, products } from "../../pages/products"
import MediaCard from "../item";

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    // const productsPromise = () => {
    //     return new Promise((resolve, reject) => {
    //         resolve(products)
    //     })
    // }

    useEffect(() => {
        getProducts()
            .then((result) => {
                setProducts(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
           <MediaCard products={products}/>
        </div>
    )

}