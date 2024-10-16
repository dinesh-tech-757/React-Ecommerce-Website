import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>

      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individual can
          showcase their products, intract with customers, and conduct
          transition without the need for a physical presence. E-commerce
          website have gained immence popularity due to their convenience,
          accessibility, and the global reach their offer.
        </p>
        <p>
          E-commerce website typically display products or services along with
          detailed descriptions, images, prices and any available variations
          (e.g.size, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
