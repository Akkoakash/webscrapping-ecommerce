import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import StoreIcon from "@material-ui/icons/Store";
import "./style.css";

const LoginT = () => {
  return (
    <div className="logint">
      <div className="logint__i">
        <h2>New customer</h2>
        <p>Signup</p>
      </div>
      <hr />
      <div className="logint__in">
        <AccountCircleIcon />
        <p>My Profile</p>
      </div>
      <hr />
      <div className="logint__in">
        <img
          width="20"
          src="https://entrackr.com/wp-content/uploads/2020/10/flipkart-amazon.jpg"
          alt="Webscrapping-Ecommerce"
        />
        <p>Webscrapping-Ecommerce</p>
      </div>
      <hr />
      <div className="logint__in">
        <StoreIcon />
        <p>Orders</p>
      </div>
      <hr />
      <div className="logint__in">
        <FavoriteIcon />
        <p>Wishlist</p>
      </div>
      <hr />
      <div className="logint__in">
        <ConfirmationNumberIcon />
        <p>Rewards</p>
      </div>
      <hr />
      <div className="logint__in">
        <CardGiftcardIcon />
        <p>Gift Cards</p>
      </div>
    </div>
  );
};

export default LoginT;