import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";



export const Navigation = () => {
    return (
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
        </nav>
        <Outlet />
      </div>
    );
};

export default Navigation