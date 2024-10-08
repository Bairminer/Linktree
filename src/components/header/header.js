import { useContext } from "react";
import styled from "styled-components";
import { Zoom } from "react-reveal";
import { profileData, themeData, quotes, songs } from "../../data/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DarkModeToggle from "react-dark-mode-toggle";
import themeContext from "../../state/context/themeContext";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = () => {
  const a = useContext(themeContext);
  const { userName, photoLink, desc } = profileData;
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const randomSong = songs[Math.floor(Math.random() * songs.length)];

  if (!a.darkMode) {
    document.body.style.backgroundColor = themeData.dark.backgroundColor;
  } else {
    document.body.style.backgroundColor = themeData.light.backgroundColor;
  }

  return (
      <>
        <DarkMode onChange={a.setDarkMode} checked={a.darkMode} size={50} />
        <Zoom>
          <HeaderWrapper>
            <CustomImage effect="blur" src={photoLink} />
            <UserNameText props={a.darkMode ? themeData.light : themeData.dark}>
              @{userName}
            </UserNameText>
            <UserNameText props={a.darkMode ? themeData.light : themeData.dark}>
              {desc}
            </UserNameText>
            <StyledEmbedWrapper>
              <iframe
                  title="Spotify"
                  src={randomSong}
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy">
              </iframe>
            </StyledEmbedWrapper>
            <QuoteText props={a.darkMode ? themeData.light : themeData.dark}>
              {randomQuote}
            </QuoteText>
          </HeaderWrapper>
        </Zoom>
      </>
  );
};
export default Header;

const DarkMode = styled(DarkModeToggle)`
  margin: 15px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CustomImage = styled(LazyLoadImage)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 5px;
`;

const UserNameText = styled.h6`
  color: ${(props) => props.props.headerFontColor};
  font-weight: bold;
  text-align: center;
`;

const QuoteText = styled.h6`
  color: ${(props) => props.props.headerFontColor};
  font-weight: bold;
  font-style: italic;
  text-align: center;
`;


const StyledEmbedWrapper = styled.div`
    width: 40vw;
    margin-top: 20px;
  
    @media (max-width: 768px) {
        width: 90vw;
    }

    iframe {
        width: 100%;  // Ensure the iframe takes up the full width of its parent div
        height: 100px;
        border: none;  // Remove any default borders from the iframe
    }
`;
