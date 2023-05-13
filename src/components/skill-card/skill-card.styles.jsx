import styled from 'styled-components'

export const SkillWrapper = styled.div`
    border: 2px solid white;
    border-radius: 10px;
    width: 23%;
    height: 100%;
    @media (max-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ 
        width: 100%;
        height: 70vh;
        margin: 10px auto;
    }
`

export const SkillTitle = styled.h1`
    text-align: center;
    color: rgb(12, 235, 179);
    letter-spacing: 3px;
    font-size: 2vw;
    margin-top: 0;
    font-style: italic;
    @media (max-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ 
        font-size: 10vw;
    }
`

export const BulletWrapper = styled.div`
    margin-left: 10%;
    text-transform: uppercase;
    font-size: 0.8vw;
    @media (max-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ 
        font-size: 5vw;
    }
`

export const SkillImageContainer = styled.div`
    height: 35%;
    text-align: center;
    display: flex;
    margin-top: 1vh;
`
export const SkillImage = styled.img`
    height: 80%;
    margin: auto;
    
`