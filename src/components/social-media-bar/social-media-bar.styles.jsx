import styled from 'styled-components'

export const MediaBarWrapper = styled.div`
    @media (max-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ 
        display: none;
    }
    position: fixed;
    bottom: 3vh;
    margin-left: 3vw;
    width: max-content;
`

export const MediaArrow = styled.img`
    width: 20px;
    height: 20px;
    padding: 10px;
    padding-right: 8px;
    text-align: center;
    transform: rotate(${(props) => props.active ? -90 : 90}deg);
    transition: all 0.3s ease-in-out;
    border: 2px solid rgb(12, 235, 179);
    border-radius: 10px;
`

export const MediaImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    height: ${(props) => props.active ? 100 : 0}px;
    opacity: ${(props) => props.active ? 1 : 0};
    width: 44px;
    transition: all 0.3s ease-in-out;
    text-align: center;
`

export const MediaImage = styled.img`
    width: 90%;
    border-radius: 5px;
`