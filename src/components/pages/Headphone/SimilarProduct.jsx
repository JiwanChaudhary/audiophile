import React from "react";
import {
  Wrapper,
  ProductHeading,
  ProductWrapper,
  Card,
  Image,
  CardHeading,
  CardButton,
} from "./SimilarProduct.styled";

import ProductOne from "../../../images/image-product.jpg"
import ProductTwo from "../../../images/producttwo.png"
import ProductThree from "../../../images/productthree.png"

const SimilarProduct = () => {
  return (
    <Wrapper>
      <ProductHeading>YOU MAY ALSO LIKE</ProductHeading>
      <ProductWrapper>
        <Card>
          <Image src={ProductThree} />
          <CardHeading>XX99 MARK I</CardHeading>
          <CardButton>see product</CardButton>
        </Card>
        <Card>
          <Image src={ProductOne} />
          <CardHeading>XX59</CardHeading>
          <CardButton>see product</CardButton>
        </Card>
        <Card>
          <Image src={ProductTwo} />
          <CardHeading>ZX9 SPEAKER</CardHeading>
          <CardButton>see product</CardButton>
        </Card>
      </ProductWrapper>
    </Wrapper>
  );
};

export default SimilarProduct;
