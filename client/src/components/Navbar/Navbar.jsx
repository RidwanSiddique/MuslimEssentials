import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"


export const Navbar = () => {
    return (
        <div className="navbar">
          <div className="wrapper">
            <div className="left">
              <div className="item">
                <img src="/img/en.png" alt="" />
                <KeyboardArrowDownIcon />
              </div>
              <div className="item">
                <span>CAD</span>
                <KeyboardArrowDownIcon />
              </div>
              <div className="item">
                <Link className ="link" to="/products/1">WOMEN</Link>
              </div>
              <div className="item">
                <Link className ="link" to="/products/2">MEN</Link>
              </div>
              <div className="item">
                <Link className ="link" to="/products/3">KIDS</Link>
              </div>
            </div>
            <div className="center">
              <Link className="link" to="/">
                <img src="/img/logo_tr_notxt.png" alt="Muslim Essentials Logo" className="logo" />
              </Link>
            </div>
            <div className="right">
              <div className="item">
                <Link className ="link" to="/">Home</Link>
              </div>
              <div className="item">
                <Link className ="link" to="/">About</Link>
              </div>
              <div className="item">
                <Link className ="link" to="/">Contact</Link>
              </div>
              <div className="item">
                <Link className ="link" to="/">Stores</Link>
              </div>
              <div className="icons">
                <SearchIcon/>
                <PersonOutlineOutlinedIcon/>
                <FavoriteBorderOutlinedIcon/>
                <div className="cartIcon">
                  <ShoppingCartOutlinedIcon/>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };