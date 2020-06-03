import React, { Component } from "react";
// import products from "../data/products.json";

const buttons = [
    {
        name: "All",
        type: "All"
    },
    {
        name: "Jackets",
        type: "Jackets"
    },
    {
        name: "Shoes",
        type: "Shoes"
    },
    {
        name: "Shirts",
        type: "Shirts"
    }
  ];
  class Body extends React.Component {
    constructor() {
      super();
      this.state = {
        Products: [
          {
            "id": "1",
            "name": "Spencer",
            "price": "$1499",
            "type": "Jackets",
            "image": "/images/products/Mens/Jackets/Spencer.jpg",
            "alt": "Navy and red embellished jacket"
        },
        {
            "id": "2",
            "name": "Vegan",
            "price": "$799",
            "type": "Jackets",
            "image": "/images/products/Mens/Jackets/Vegan.jpg",
            "alt": "Black faux leather jacket"
        },
        {
            "id": "3",
            "name": "Double Breast",
            "price": "$1999",
            "type": "Jackets",
            "image": "/images/products/Mens/Jackets/DoubleBreast.jpg",
            "alt": "Black double breasted suit"
        },
        {
            "id": "4",
            "name": "Trench",
            "price": "$2199",
            "type": "Jackets",
            "image": "/images/products/Mens/Jackets/Trench.webp",
            "alt": "Tan trench coat"
        },
        {
            "id": "5",
            "name": "Sport",
            "price": "$899",
            "type": "Shoes",
            "image": "/images/products/Mens/shoes/Sport.jpg",
            "alt": "White sneaker"
        },
        {
            "id": "6",
            "name": "Chelsea",
            "price": "$499",
            "type": "Shoes",
            "image": "/images/products/Mens/shoes/Chelsea.jpg",
            "alt": "Brown chelsea boot"
        },
        {
            "id": "7",
            "name": "Athlete",
            "price": "$449",
            "type": "Shoes",
            "image": "/images/products/Mens/shoes/Athlete.jpg",
            "alt": "Black knit sneaker"
        },
        {
            "id": "8",
            "name": "Tennis",
            "price": "$399",
            "type": "Shoes",
            "image": "/images/products/Mens/shoes/Tennis.webp",
            "alt": "White tennis shoe with patches and crown"
        },            {
            "id": "9",
            "name": "Polar",
            "price": "$749",
            "type": "Shirts",
            "image": "/images/products/Mens/tops/Polar.jpg",
            "alt": "Black shirt with split logo"
        },
        {
            "id": "10",
            "name": "Chrome",
            "price": "$599",
            "type": "Shirts",
            "image": "/images/products/Mens/tops/Chrome.jpg",
            "alt": "Back of black shirt with blue chrome logo"
        },
        {
            "id": "11",
            "name": "Bandana",
            "price": "$349",
            "type": "Shirts",
            "image": "/images/products/Mens/tops/Bandana.jpg",
            "alt": "Black shirt with floral bandana pattern"
        },
        {
            "id": "12",
            "name": "James Dean",
            "price": "$399",
            "type": "Shirts",
            "image": "/images/products/Mens/tops/JamesDean.jpg",
            "alt": "White shirt with James Dean picture"
        }
        ],
        filterItems: []
      };
    }
  
    componentDidMount() {
      this.setState({
        filterItems: this.state.Products
      });
    }
  
    handleClick = type => {
      let filterItems = [];
      if (type === "All") {
        filterItems = this.state.Products;
      } else {
        filterItems = this.state.Products.filter(
          Products => Products.type === type
        );
      }
  
      this.setState({ filterItems });
    };
  
    render() {
      const renderAll = this.state.filterItems.map(Products => (
<div>
            <div key={Products.type} className="product-container">
                    <img className="product-image" src={Products.image} alt={Products.alt}/>
                    <h3 className="product-name">{Products.name}</h3>
                    <div className="product-price">{Products.price}</div>
                    <p className="product-desc">{Products.alt}</p>
            </div>
</div>
      ));
      return (
        <div>
    <div className="button-filter__container">
        {buttons.map(({ name, type }) => (
          <button className="button-filter__style"
            key={name}
            type={type}
            onClick={this.handleClick.bind(this, type)}
          >
            {name}
        </button>
      ))}
    </div>

    <div className="product-grid">{renderAll}</div>
  </div>
);
}
}

export default Body;