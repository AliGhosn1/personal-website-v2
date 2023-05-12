import { styled, css } from "styled-components";

import { ReactComponent as GitHubIcon } from '../../assets/github-mark-white.svg';

const BasicProjectStyles = css`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
`

export const ProjectCardContainer = styled.div`
    background-color: transparent;
    width: 100%;
    height: 28vh;
    border: 1px solid rgb(12, 235, 179);
    perspective: 1000px;

    &:hover .flip{
        transform: rotateY(180deg);
    }

    ::-webkit-scrollbar{
        -webkit-appearance: none;
    }

    ::-webkit-scrollbar:vertical {
        width: 6px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.6);
    }
`

export const ProjectCardInnerContainer = styled.div`
    position: relative;
    width: calc(100% - 0.177px);
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
`

export const ProjectCardContent = styled.div`
    padding: 5%;
    height: 80%;
`

export const ProjectCardFront = styled.div`
    ${BasicProjectStyles}
    background-color: #bbb;
    color: black;
    overflow: hidden;
`

export const ProjectCardBack = styled.div`
    ${BasicProjectStyles}
    background-color: #002A32;
    color: white;
    transform: rotateY(180deg);
`

export const ProjectImageHolder = styled.img`
    width: 100%;
    height: 100%;
`

export const ProjectTitle = styled.h1`
    font-size: 3vh;
    margin: 0;
    padding: 0;
    cursor: default;
`

export const ProjectDescription = styled.p`
    overflow-y: auto;
    height: 65%;
    cursor: default;
    font-size: 1.6vh;
`

export const ProjectTechnologies = styled.div`
    display: flex;
    gap: 1vw;
`

export const ProjectTechnology = styled.p`
    padding: 0 3px;
    margin: 0;
    background: white;
    color: #002A32;
    font-weight: bold;
    border-radius: 2px;
    cursor: default;
    min-width: 15px;
    text-align: center;
    font-size: 1.6vh;
`

export const GitHubLogo = styled(GitHubIcon)`
    position: absolute;
    right: 0;
    top: -3px;
    transform: scale(0.38, 0.38);
`

export const LiveLinkLogo = styled.img`
    position: absolute;
    right: 80px;
    top: 29px;
    //transform: scale(0.9, 0.9);
`