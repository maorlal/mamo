import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useNavigate, Link , MemoryRouter  } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      

      <Title>מוצרים</Title>
      <FilterContainer>
        <Filter>
          <FilterText>סינון מוצרים:</FilterText>
          <Select>
            <Option disabled selected>
              קטגוריה
            </Option>
            <Option>מטריות</Option>
            <Option>מצתים</Option>
            <Option>מגשים</Option>
            <Option>אלקטורניקה</Option>
            <Option>יום יום</Option>
            <Option>טבק</Option>
          </Select>
          {/* <Select>
            <Option disabled selected>
              גודל
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select> */}
        </Filter>
        <Filter>
          <FilterText>מיון מוצרים:</FilterText>
          <Select>
            <Option selected>חדשים</Option>
            <Option>מחיר</Option>
            <Option>גודל</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      
    </Container>
  );
};

export default ProductList;
