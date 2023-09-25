import React from 'react';
import "../Css/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
    return (
        <div className='header'>
            <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            <div className="header__option" style={{marginRight:'25px'}}>
                    <span className="header__optionLineOne" style={{marginLeft:'39px',marginBottom:'-9px',marginTop:'5px',fontWeight:'bold'}}>
                        Hello
                    </span>
                    <span className="header__optionLineTwo">
                    <LocationOnOutlinedIcon style={{marginBottom:'10px',marginLeft:'10px'}} /> Select Your Address
                    </span>
                </div>
            <div className='header_search'>
                <input type="text" className='header_searchInput' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className="header_nav">
                <div className="header__option">
                    <span className="header__optionLineOne" style={{fontWeight:'bold'}}>
                        IN <ArrowDropDownIcon />
                    </span>
                   
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Sign In
                    </span>
                    <span className="header__optionLineTwo">
                        Account & List
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <div className="header_optionBasket">
                    <ShoppingCartOutlinedIcon  />
                    <span className="header_optionLineTwo header_basketCount">0</span>
                </div>

            </div>
        </div>
    )
}

export default Header
