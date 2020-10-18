import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import { BiMenu } from "react-icons/bi";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  onLinkClick = (e) => {
    e.preventDefault();
    const splittedUrl = e.target.href.split("/");
    const segment = splittedUrl[splittedUrl.length - 1];
    const element = document.querySelector(segment);
    const topPos = element.getBoundingClientRect().top;

    window.scroll({
      top: topPos,
      behavior: "smooth", // чтобы было плавным
    });
  };

  render() {
    return (
      <nav
        className="py-4 shadow-lg"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="menuContainer justify-center mx-auto flex md:items-center px-6 lg:px-0">
          <div className="navbar-brand flex order-2 ml-auto mt-4 md:mt-0">
            {/* Hamburger menu */}
            <div
              className={`ml-auto md:hidden ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="button"
              tabIndex={"0"}
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
            >
              <BiMenu className="text-2xl" />
            </div>
          </div>
          <div
            id="navMenu"
            className={`w-full justify-center flex ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered flex flex-col md:flex-row md:items-center justify-center w-full">
              <div className="order-2 md:order-1">
                <Link
                  className="navbar-item px-3 md:pt-0 font-bold text-toptuindeals-darkgreen my-0"
                  to="/#openingstijden"
                  onClick={this.onLinkClick}
                >
                  Openingstijden
                </Link>
                <Link
                  className="navbar-item px-3 font-bold text-toptuindeals-darkgreen my-0"
                  to="/#over"
                  onClick={this.onLinkClick}
                >
                  Over TopTuindeals
                </Link>
              </div>
              <div className="md:-mb-16 md:order-2">
                <Link to="/" onClick={this.onLinkClick} title="Logo">
                  <img
                    src={logo}
                    alt="TopTuinDeals Oudenbosch"
                    className="w-16 md:w-40 "
                  />
                </Link>
              </div>
              <div className="order-2 md:order-3">
                <Link
                  className="navbar-item px-3 font-bold text-toptuindeals-darkgreen my-0"
                  to="/#nieuws"
                  onClick={this.onLinkClick}
                >
                  Laatste nieuws
                </Link>
                <Link
                  onClick={this.onLinkClick}
                  className="navbar-item rounded md:py-2 pyx-4 font-bold text-toptuindeals-darkgreen my-0"
                  to="/#route"
                >
                  Route
                </Link>
                <Link
                  onClick={this.onLinkClick}
                  className="navbar-item rounded md:py-2 pyx-4 font-bold text-toptuindeals-darkgreen my-0"
                  to="/#contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
