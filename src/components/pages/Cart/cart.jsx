import { BoxWrapper, GoBack, Wrapper, BoxOne, BoxTwo, BoxOneWrapper, CheckOut, BillDetails } from "./cart.styled";

const Cart = () => {
  return (
    <Wrapper>
      <GoBack to="/">Go Back</GoBack>
      <BoxWrapper>
        <BoxOne>
            <BoxOneWrapper>
                <CheckOut>CHECKOUT</CheckOut>
                <BillDetails>BILL DETAILS</BillDetails>
            </BoxOneWrapper>
        </BoxOne>
        <BoxTwo></BoxTwo>
      </BoxWrapper>
    </Wrapper>
  );
};

export default Cart;
