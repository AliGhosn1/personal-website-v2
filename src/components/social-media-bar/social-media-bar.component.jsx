import { useState } from "react";

import GitHubImage from '../../assets/GitHub.png'
import LinkedInImage from '../../assets/linkedin.png'

import { MediaBarWrapper, MediaArrow, MediaImagesContainer, MediaImage } from "./social-media-bar.styles";

const MediaBar = () => {

    const [active, setActive] = useState(false);

    const onClickHandler = () => {
        setActive(!active);
    } 

    return(
        <MediaBarWrapper>
            <MediaImagesContainer active={active}>
                <a href='https://github.com/AliGhosn1' target="_blank"><MediaImage src={GitHubImage}/></a>
                <a href='https://www.linkedin.com/in/ali-ghosn-b53402217/' target="_blank"><MediaImage src={LinkedInImage}/></a>
            </MediaImagesContainer>
            <MediaArrow src={'https://i.imgur.com/QdV4UHT.png'} onClick={onClickHandler} active={active}/>
        </MediaBarWrapper>
    )
}

export default MediaBar;