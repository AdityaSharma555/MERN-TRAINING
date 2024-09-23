import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './ProductPage';

const Products = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((json) => {
                setData(json);
                console.log(json); // Log the fetched data
            });
    }, []);

    return (
        <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                {
                    data.map((item) => (
                        // You need to return this JSX
                        <ProductCard 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            category={item.category}
                            image={item.image} 
                        />
                    ))
                }                
            </div>
        </>
    )
}

export default Products;
