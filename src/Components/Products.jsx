import { useEffect,useState } from "react";

export const Products = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    },[])

    const getProducts = () => {
        fetch("http://localhost:3001/products")
        .then(d => d.json())
        .then((res) => {setProduct(res)})
    }

    return (
        <>
        <table className="table">
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Id</th>
            </tr>
            {product.map((e) => {
                <tr>
                    <td>{e.name}</td>
                    <td>{e.price}</td>
                    <td>{e.id}</td>
                </tr>
            })}
        </table>
        </>
    )
}