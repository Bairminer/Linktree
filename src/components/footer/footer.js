import { useContext } from "react";
import styled from "styled-components";
import { Zoom } from "react-reveal";
import { footerData, themeData } from "../../data/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DarkModeToggle from "react-dark-mode-toggle";
import themeContext from "../../state/context/themeContext";
import "react-lazy-load-image-component/src/effects/blur.css";

const Footer = () => {
  const a = useContext(themeContext);
  const desc = footerData["text"];
  if (!a.darkMode) {
    document.body.style.backgroundColor = themeData.dark.backgroundColor;
  } else {
    document.body.style.backgroundColor = themeData.light.backgroundColor;
  }

  return (
      <>
        <DarkMode onChange={a.setDarkMode} checked={a.darkMode} size={50} />
        <Zoom>
          <FooterWrapper>
            <UserNameText props={a.darkMode ? themeData.light : themeData.dark}>
              {desc}
            </UserNameText>
          </FooterWrapper>
        </Zoom>
      </>
  );
};
export default Footer;

const DarkMode = styled(DarkModeToggle)`
  margin: 15px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;


const UserNameText = styled.h6`
  color: ${(props) => props.props.headerFontColor};
  font-weight: bold;
  text-align: center;
`;
