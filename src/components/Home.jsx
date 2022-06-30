import React from "react";
import myimg from "../Images/iphone.jpg";
import cartImg from "../Images/add.png";

function Home(props) {
  return (
    <div>
        <div className="add-to-cart">
            <img src={cartImg}/>
        </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={myimg} alt="Image" />
        </div>
        <div className="text-wrapper item">
            <span>I Phone</span>
            <span>Price $1000</span>
        </div>
        <div className="btn-wrapper item">
            <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
