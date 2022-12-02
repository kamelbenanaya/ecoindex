import "../styles/globals.css";
import "../styles/indexes.css";
import media from "styled-media-query";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import {
  faBars,
  faTimes,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

// import { BrowserRouter as Link } from "react-router-dom";

export const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  /* overflow-x: hidden; */
  background-color: #0154ab;
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
  color: #000;
  height: 30px;
`;
export const StyledFontAwesomeIconArrow = styled(FontAwesomeIcon)`
  width: 30px;
  color: #000;
  height: 30px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: 500ms;
`;
export const LogoImg = styled(Image)`
  width: 150px;
  height: 78px;
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
  color: #000;
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
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-family: "Baloo Bhaijaan";
  &:hover {
    color: #000;
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
/*Footer Style*/
export const FooterWrapper = styled.div`
  background-color: #0154ab;
  width: 100%;
  height: 100%;
  min-height: 276px;

  display: flex;

  flex-direction: column;
  align-items: center;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    flex-direction: row;
    height: 100px;
    min-height: 276px;
`}
`;
export const FooterLogo = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;

  height: 100%;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
  justify-content: center;
  max-width:300px;
  

`}
`;
export const Logo = styled(Image)`
  width: 200px;
  height: 90%;
  /* background-color: violet; */
`;
export const FooterListContainer = styled.div`
  width: 100%;
  /* background-color: brown; */
  /* justify-content: center;
  align-items: center; */
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    flex-direction: row;


`}
`;
export const FooterList = styled.div`
  width: 100%;
  /* background-color: yellow; */
  justify-content: flex-start;
  align-items: center;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    padding-right:15px;
`}
`;
export const FooterMedia = styled.div`
  width: 100%;
  /* background-color: red; */
  justify-content: space-around;
  align-items: center;
  display: flex;

  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    justify-content: space-evenly;
    max-width: 300px;
    align-items:flex-start;
    
    height: 100%;
`}
`;
export const Listulf = styled.div`
  width: 100%;
  /* background-color: turquoise; */
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 10px;
  color: white;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    justify-content: left;
`}
`;
export const Listul = styled.div`
  width: 100%;
  /* background-color: turquoise; */
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 10px;
  color: #d5d5d5;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    justify-content: left;
`}
`;

export const Listulfs = styled.div`
  width: 100%;
  /* background-color: turquoise; */
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 10px;
  color: white;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    justify-content: center;
`}
`;
export const StyledLinkFooter = styled(Link)`
  text-decoration: none;
  color: #d5d5d5;
  font-size: 15px;
  &:hover {
    color: #000;
  }
`;
export const StyledFontAwesomeIconfa = styled(FontAwesomeIcon)`
  color: #fff;
  width: 11px;
  height: 20px;
`;
export const StyledFontAwesomeIconli = styled(FontAwesomeIcon)`
  color: #fff;
  width: 20px;
  height: 20px;
`;
export const StyledFontAwesomeIconyou = styled(FontAwesomeIcon)`
  color: #fff;
  width: 24px;
  height: 17px;
`;
export const MediaContent = styled.div`
  width: 100%;
  /* background-color: cyan; */
  display: flex;
  flex-direction: column;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    margin-top: 93px;
`}
`;
export const MediaContentforicons = styled.div`
  width: 100%;
  /* background-color: cyan; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    padding-bottom:0px;
`}
`;
/*call to action*/
export const CallToActionContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  /* overflow-x: hidden; */
  background-color: red;
  position: relative;
`;
export const CallToActionImage = styled(Image)`
  width: 100%;
  height: 180px;
`;
export const CallToActiontext = styled.div`
  width: 100%;
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CallToActiontextTitle = styled.div`
  display: flex;
  color: #fff;
  font-size: 40px;
`;
export const CallToActionButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 20px;
  background-color: green;
`;
function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
          <LogoImg src="/logo.png" width={500} height={500} />
        </LogoContainer>
        <MenuDeskContainer>
          <MenuDesk>
            <StyledLink href="/">Accueil</StyledLink>
          </MenuDesk>
          <MenuDesk>
            <StyledLink href="/objectif">Notre objectif</StyledLink>
          </MenuDesk>
          <MenuDesk>
            <StyledLink href="/impactpostive">Impact postive</StyledLink>
          </MenuDesk>
          <MenuDesk>
            <StyledLink href="/impactnegative">Impact negative</StyledLink>
          </MenuDesk>
          <MenuDesk>
            <StyledLink href="/contactus">Contactez nous</StyledLink>
          </MenuDesk>
        </MenuDeskContainer>
        <BurgerContainer>
          <StyledFontAwesomeIcon icon={faBars} onClick={onBurgerClicked} />
        </BurgerContainer>
        <Drawer isOpen={isDrawerOpen}>
          <CancelButtonContainer>
            <StyledFontAwesomeIcon icon={faTimes} onClick={onCancelClicked} />
          </CancelButtonContainer>
          <MenuitemContainer>
            <Menuitem onClick={onCancelClicked}>
              <StyledLink href="/">Accueil</StyledLink>
            </Menuitem>
            <Menuitem onClick={onCancelClicked}>
              <StyledLink href="/objectif">Notre objectif</StyledLink>
            </Menuitem>
            <Menuitem onClick={onCancelClicked}>
              <StyledLink href="/impactpostive">Impact postive</StyledLink>
            </Menuitem>
            <Menuitem onClick={onCancelClicked}>
              <StyledLink href="/impactnegative">Impact negative</StyledLink>
            </Menuitem>
            <Menuitem onClick={onCancelClicked}>
              <StyledLink href="/contactus">Contactez nous</StyledLink>
            </Menuitem>
          </MenuitemContainer>
        </Drawer>
      </NavContainer>
      <Component {...pageProps} />
      <CallToActionContainer>
        <CallToActionImage
          src="/calltoaction.jpg"
          layout="fill"
          objectFit="cover"
        />
        <CallToActiontext>
          <CallToActiontextTitle>SIDA SUPPORT</CallToActiontextTitle>
          <CallToActionButton
            onClick={() => {
              router.push("/contactus");
            }}
          >
            Contactez nous
          </CallToActionButton>
        </CallToActiontext>
      </CallToActionContainer>
      <FooterWrapper>
        <FooterLogo>
          <Logo src="/logo.png" width={500} height={500} />
        </FooterLogo>
        <FooterListContainer>
          <FooterList>
            <Listulf>Information</Listulf>
            <Listul>
              <StyledLinkFooter href="/">wikipedia</StyledLinkFooter>
            </Listul>
            <Listul>
              <StyledLinkFooter href="/">CDC</StyledLinkFooter>
            </Listul>
            <Listul>
              <StyledLinkFooter href="/"> News</StyledLinkFooter>
            </Listul>
          </FooterList>
          <FooterList>
            <Listulf>Clients</Listulf>
            <Listul>
              <StyledLinkFooter href="/">
                Corporate organisation
              </StyledLinkFooter>
            </Listul>
            <Listul>
              <StyledLinkFooter href="/">Our donation</StyledLinkFooter>
            </Listul>
            <Listul>
              <StyledLinkFooter href="/">About company</StyledLinkFooter>
            </Listul>
          </FooterList>
          <FooterList>
            <Listulf>Additionally</Listulf>
            <Listul>
              <StyledLinkFooter href="/">Services Center</StyledLinkFooter>
            </Listul>
            <Listul>
              <StyledLinkFooter href="/">
                Terms of use of the site
              </StyledLinkFooter>
            </Listul>
          </FooterList>
        </FooterListContainer>
        <FooterMedia>
          <MediaContent>
            <Listulfs>Social Media</Listulfs>
            <MediaContentforicons>
              <StyledFontAwesomeIconfa icon={faFacebookF} />
              <StyledFontAwesomeIconli icon={faLinkedinIn} />
              <StyledFontAwesomeIconyou icon={faYoutube} />
            </MediaContentforicons>
          </MediaContent>
        </FooterMedia>
      </FooterWrapper>
    </div>
  );
}

export default MyApp;
