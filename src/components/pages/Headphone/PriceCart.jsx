import React, { useState } from "react";
import {
  Price,
  AllButton,
  ButtonWrapper,
  SubButton,
  NumButton,
  AddButton,
  CartButton,
} from "./Headphones.styled";

const PriceCart = () => {
  const [price, setPrice] = useState(100);
  const [quantity, setQuantity] = useState(1);

  function Increment(quantity) {
    setPrice((quantity + 1) * 100);

    setQuantity(quantity + 1);
  }
  function Decrement(value) {
    if (value === 1) {
      return;
    }
    setPrice(price - 100);
    setQuantity(value - 1);
  }

  return (
    <>
      <Price>${price}</Price>
      <AllButton>
        <ButtonWrapper>
          <SubButton onClick={() => Decrement(quantity)}>-</SubButton>
          <NumButton>{quantity}</NumButton>
          <AddButton onClick={() => Increment(quantity)}>+</AddButton>
        </ButtonWrapper>
        <CartButton>Add to cart</CartButton>
      </AllButton>
    </>
  );
};

export default PriceCart;
