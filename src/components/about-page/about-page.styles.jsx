import  styled  from "styled-components";

export const AboutPageWrapper = styled.div`
    margin: 0 15vw;
    height: 85vh;
`

export const AboutPageTable = styled.table`
    margin: auto;
    height: 100%;
`

export const AboutPageContent = styled.div`
    margin: 0 5vw;
    display: flex;
    height: 650px;
    flex-direction: column;
    justify-content: space-between;
`

export const AboutPageText = styled.div`
`

export const AboutPageTitle = styled.h1`
    color: rgb(12, 235, 179);
    margin-bottom: 3vh;
    margin-top: 0;
    letter-spacing: 3px;
`

export const AboutPageInformation = styled.p`
    font-size: 25px;
`

export const AboutPagePicture = styled.img`
    border-radius: 10px;
`

export const ResumeButton = styled.a`
    margin: auto 0;
    width: max-content;
    cursor: pointer;
    border-radius: 4px;
    text-decoration: none;
    padding: 12px 18px;
    font-size: 12px;
    line-height: 19px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif; font-weight:400;
    letter-spacing: 3px;
    border:solid 2px #fff;
    background: transparent;
    color: #fff !important;
    -webkit-transition: all .4s ease-in-out;
       -moz-transition: all .4s ease-in-out;
        -ms-transition: all .4s ease-in-out;
         -o-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;

    &:hover{
        border:solid 2px #fff;
        background: #fff;
        color: #1f1f1f !important;
        -webkit-transition: all .4s ease-in-out;
       -moz-transition: all .4s ease-in-out;
        -ms-transition: all .4s ease-in-out;
         -o-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;
    }
`

export const SkillsSection = styled.div`
    padding: 8vh 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SkillsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50vh;
`