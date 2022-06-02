import {
  BoxWrapper,
  GoBack,
  Wrapper,
  BoxOne,
  BoxTwo,
  BoxOneWrapper,
  CheckOut,
  BillDetails,
  NameDetails,
  Details,
  Label,
  Input,
  Button,
  ButtonWrapper,
} from "./Cart.styled";

const Cart = () => {
  return (
    <Wrapper>
      <GoBack to="/">Go Back</GoBack>
      <BoxWrapper>
        <BoxOne>
          <BoxOneWrapper>
            <CheckOut>CHECKOUT</CheckOut>
            <BillDetails>BILL DETAILS</BillDetails>
            <Details>
              <NameDetails>
                <Label htmlFor="name">Name</Label>
                <Input type="name" id="name" placeholder="Jiwan Chaudhary" />
              </NameDetails>
              <NameDetails>
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" placeholder="jiwan@gmail.com" />
              </NameDetails>
              <NameDetails>
                <Label htmlFor="number">Phone Number</Label>
                <Input
                  type="number"
                  id="number"
                  placeholder="+977 9866676768"
                />
              </NameDetails>
            </Details>
            <BillDetails>SHIPPING ADDRESS</BillDetails>
            <Details>
              <NameDetails>
                <Label htmlFor="address">Address</Label>
                <Input type="name" id="address" placeholder="Koteshor" />
              </NameDetails>
              <NameDetails>
                <Label htmlFor="code">Zip Code</Label>
                <Input type="number" id="code" placeholder="004779" />
              </NameDetails>
              <NameDetails>
                <Label htmlFor="city">City</Label>
                <Input type="name" id="city" placeholder="Kathmandu" />
              </NameDetails>
              <NameDetails>
                <Label htmlFor="country">Country</Label>
                <Input type="name" id="country" placeholder="Nepal" />
              </NameDetails>
            </Details>
            <BillDetails>PAYMENT DETAILS</BillDetails>
            <Details>
              <Label>Payment Method</Label>
              <NameDetails style={{ display: "flex", flexDirection: "column" }}>
                <ButtonWrapper>
                  <input type="radio" />
                  <Button>e-Money</Button>
                </ButtonWrapper>
                <ButtonWrapper>
                  <input type="radio" />
                  <Button>Cash on Delivery</Button>
                </ButtonWrapper>
              </NameDetails>
              <NameDetails>
                <Label>e-Money Number</Label>
                <Input type="number" placeholder="6745678" />
              </NameDetails>
              <NameDetails>
                <Label>e-Money PIN</Label>
                <Input type="number" placeholder="1234" />
              </NameDetails>
            </Details>
          </BoxOneWrapper>
        </BoxOne>
        <BoxTwo></BoxTwo>
      </BoxWrapper>
    </Wrapper>
  );
};

export default Cart;
