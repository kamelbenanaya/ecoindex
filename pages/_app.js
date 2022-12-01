import "../styles/globals.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import media from "styled-media-query";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faBars,
  faTimes,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

// import { BrowserRouter as Link } from "react-router-dom";

export const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  /* overflow-x: hidden; */
  background-color: white;
`;
export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 20%;

`}
`;
export const BurgerContainer = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    display: none;

`}
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 30px;
  color: #f26522;
  height: 30px;
`;
export const StyledFontAwesomeIconArrow = styled(FontAwesomeIcon)`
  width: 30px;
  color: #f26522;
  height: 30px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: 500ms;
`;
export const LogoImg = styled.img`
  width: 150px;
  height: 40px;
`;
export const Drawer = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 300ms;
  z-index: 10;
  transform: ${(props) =>
    props.isOpen ? "translateX(0%)" : "translateX(100%)"};
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    display: none;

`}
`;
export const CancelButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
export const Menuitem = styled.div`
  width: 90%;
  height: 50px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MenuitemContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SubMenu = styled.div`
  width: 90%;
  transition: 300ms;
  height: ${(props) => (props.isOpen ? "100px" : "0px")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;
export const SubMenuContent = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  /* align-items: center;
  justify-content: space-between; */
  /* transition: display 50000ms; */
`;
export const MenuDeskContainer = styled.div`
  display: none;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    display: flex;
    flex-direction:row;
    width: 60%;

`}
`;
export const MenuDesk = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubMenuDesk = styled.div`
  background-color: white;
  width: 100%;
  transition: 500ms;
  /* height: ${(props) => (props.isOpen ? "100px" : "0px")}; */
  height: 0px;
  display: none;
  position: absolute;
  top: 80px;
  overflow-x: visible;
  &:hover {
    display: flex;
    flex-direction: column;
  }
`;
export const SubMenuDeskContent = styled.div`
  /* display: ${(props) => (props.isOpen ? "flex" : "none")}; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover${SubMenuDesk} {
    display: flex;
  }
`;
export const MenuDeskCategories = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
  height: 80px;
  &:hover ${SubMenuDesk} {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
export const IconContainer = styled.div`
  display: none;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 20%;  
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

`}
`;
export const StyledFontAwesomeIconMenu = styled(FontAwesomeIcon)`
  width: 25px;
  height: 21px;
  color: #f26522;
  padding: 5px;
  position: relative;
`;
export const IconContainerMobile = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;
export const StyledLink = styled.div`
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-family: "Baloo Bhaijaan";
  &:hover {
    color: #f26522;
  }
`;
export const CartItemContainer = styled.div`
  width: 70px;
  height: 80px;
  /* background-color: brown; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Countshopcard = styled.div`
  position: absolute;
  top: 10px;
  right: 5px;
  border: 1px solid red;
  border-radius: 13px;
  width: fit-content;
  color: white;
  background: red;
  text-align: center;
`;

function MyApp({ Component, pageProps }) {
  function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  function enableScrolling() {
    window.onscroll = function () {};
  }
  // const { globalState } = useGlobalContext();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const onBurgerClicked = () => {
    setDrawerOpen(true);
    disableScrolling();
  };
  const onCancelClicked = () => {
    setDrawerOpen(false);
    enableScrolling();
  };
  const onSubMenuClicked = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };
  return (
    <div>
      <NavContainer>
        <LogoContainer>
          <LogoImg
            src="https://www.mecatronic.tn/wp-content/uploads/2019/09/cluster-logo9.png"
            width={"150px"}
            alt="aaa"
          />
        </LogoContainer>
        <MenuDeskContainer>
          <MenuDesk>
            <StyledLink to="/">Home</StyledLink>
          </MenuDesk>
          <MenuDesk>
            <StyledLink to="/About">About us</StyledLink>
          </MenuDesk>
          <MenuDesk>
            <StyledLink to="/contact">Contact us</StyledLink>
          </MenuDesk>
          <MenuDeskCategories>
            <StyledLink>Categories</StyledLink>

            <StyledFontAwesomeIconArrow
              isOpen={isSubMenuOpen}
              icon={faCaretDown}
              onClick={onSubMenuClicked}
            />
            <SubMenuDesk isOpen={isSubMenuOpen}>
              <SubMenuDeskContent isOpen={isSubMenuOpen}>
                <StyledLink to="/Laptop">Laptop</StyledLink>
              </SubMenuDeskContent>
              <SubMenuDeskContent isOpen={isSubMenuOpen}>
                <StyledLink to="/Phone">Phone</StyledLink>
              </SubMenuDeskContent>
              <SubMenuDeskContent isOpen={isSubMenuOpen}>
                <StyledLink to="/Accessoires">Accessoires</StyledLink>
              </SubMenuDeskContent>
            </SubMenuDesk>
          </MenuDeskCategories>
        </MenuDeskContainer>
        <IconContainer>
          <StyledFontAwesomeIconMenu icon={faHeart} />
          <CartItemContainer>
            <Countshopcard>0</Countshopcard>
            <StyledLink to="/cart">
              {" "}
              <StyledFontAwesomeIconMenu icon={faCartShopping} />
            </StyledLink>
          </CartItemContainer>

          <StyledFontAwesomeIconMenu icon={faUser} />
        </IconContainer>
        <BurgerContainer>
          <StyledFontAwesomeIcon icon={faBars} onClick={onBurgerClicked} />
        </BurgerContainer>
        <Drawer isOpen={isDrawerOpen}>
          <CancelButtonContainer>
            <StyledFontAwesomeIcon icon={faTimes} onClick={onCancelClicked} />
          </CancelButtonContainer>
          <MenuitemContainer>
            <Menuitem onClick={onCancelClicked}>
              <StyledLink to="/">Home</StyledLink>
            </Menuitem>
            <Menuitem onClick={onCancelClicked}>
              <StyledLink to="/About">About us</StyledLink>
            </Menuitem>
            <Menuitem onClick={onCancelClicked}>
              <StyledLink to="/contact">Contact us</StyledLink>
            </Menuitem>
            <Menuitem>
              <StyledLink>Categories</StyledLink>
              <StyledFontAwesomeIconArrow
                isOpen={isSubMenuOpen}
                icon={faCaretDown}
                onClick={onSubMenuClicked}
              />
            </Menuitem>
            <SubMenu isOpen={isSubMenuOpen}>
              <SubMenuContent onClick={onCancelClicked} isOpen={isSubMenuOpen}>
                <StyledLink to="/Laptop">Laptop</StyledLink>
              </SubMenuContent>
              <SubMenuContent onClick={onCancelClicked} isOpen={isSubMenuOpen}>
                <StyledLink to="/Phone">Phone</StyledLink>
              </SubMenuContent>
              <SubMenuContent onClick={onCancelClicked} isOpen={isSubMenuOpen}>
                <StyledLink to="/Accessoires">Accessoires</StyledLink>
              </SubMenuContent>
            </SubMenu>
          </MenuitemContainer>
          <IconContainerMobile>
            <StyledFontAwesomeIconMenu icon={faHeart} />
            <StyledLink to="/cart" onClick={onCancelClicked}>
              <CartItemContainer>
                <Countshopcard>0</Countshopcard>
                <StyledFontAwesomeIconMenu icon={faCartShopping} />
              </CartItemContainer>
            </StyledLink>
            <StyledFontAwesomeIconMenu icon={faUser} />
          </IconContainerMobile>
        </Drawer>
      </NavContainer>
      <Component {...pageProps} />
      <h1>hello world</h1>
    </div>
  );
}

export default MyApp;
