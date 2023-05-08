import "./navigation.css";

import {
  IoCartOutline,
  IoHeartOutline,
  IoPersonOutline
} from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

interface Props {
  addedProductsTotal: number;
  navLinks: { title: string; to: string }[];
  checkoutLink: string;
}

const Navigation = ({
  addedProductsTotal,
  navLinks = [],
  checkoutLink = ""
}: Props) => {
  const shouldDisplayNberOfAddedProduct = addedProductsTotal !== 0;

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <span className="navbar-item is-size-4 has-text-weight-bold">MF</span>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start ml-6">
          {navLinks.map(({ title, to }) => (
            <span key={title} className="navbar-item mr-4">
              <NavLink to={to}>{title}</NavLink>
            </span>
          ))}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <span className="icon mr-5">
              <IoHeartOutline size="medium" />
            </span>
            <Link to={checkoutLink} className="cart-link">
              <span className="icon mr-5 is-relative">
                {shouldDisplayNberOfAddedProduct && (
                  <div className="item-total-box has-text-white has-background-black">
                    {addedProductsTotal}
                  </div>
                )}
                <IoCartOutline size="medium" />
              </span>
            </Link>
            <span className="icon">
              <IoPersonOutline size="small" />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
