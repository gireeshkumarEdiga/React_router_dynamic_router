import {Link} from "react-router-dom"

export const Navbar = () => {

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/products/:id">Products details</Link>
        </div>
    )
}