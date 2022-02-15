import styled from "styled-components";
import { mobile ,  } from "../responsive";

const Container = styled.div`
height: 30px;
display: contents;
justify-content: right;
display: flex;
border-bottom-style: solid;
border-bottom-color: #c5c5c5;
border-bottom-width: 1px;
${mobile({ display: "none"})}
`;

const Wrapper = styled.div`
padding: 5px 5px;
display: flex;
justify-content: space-between;
border: #000000;
`;

const TopMenuItem = styled.a`
margin-left: 10px;
margin-right: 10px;
display: inline-block;
font-size: 16px;
color: black;
&:hover{
    color: #cacaca;
}
text-decoration: none;
&::before{
    content: "";
}
`;

const Announcement = () => {
    return <Container>
      <Wrapper>
    <TopMenuItem href="/page/ret">
        מדיניות החלפות והחזרות
    </TopMenuItem> 
    <TopMenuItem href="/page/ret">
        אודותינו
    </TopMenuItem>
    <TopMenuItem href="/page/ret">
        תקנון
    </TopMenuItem>
    <TopMenuItem href="/page/ret">
        מאמרים
    </TopMenuItem>
    </Wrapper>
    
    
    
    </Container>;
};

export default Announcement;
