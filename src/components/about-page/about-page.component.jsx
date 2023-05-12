import { AboutPageWrapper, AboutPageTable, AboutPageTitle, AboutPageInformation, AboutPagePicture, AboutPageContent, AboutPageText, ResumeButton, SkillsSection, 
         SkillsContainer, ImportantWord } from "./about-page.styles";
import SkillCard from "../skill-card/skill-card.component";

import PFP from '../../assets/personal-picture.png'
import Resume from '../../assets/Ali-Ghosn-Resume.pdf'

const AboutPage = () => {

    const SKILLS = [
        {
            name: 'Front-End',
            tools: ['HTML/CSS','Bootstrap', 'React.js', 'Redux', 'EJS' ],
            icon: 'https://i.imgur.com/8ldLMlC.png'
        },
        {
            name: 'Back-End',
            tools: ['Python', 'MongoDB', 'Firebase','SQLITE3', 'EXPRESS.JS'],
            icon:'https://i.imgur.com/odOmIFN.png'
        },
        {
            name: 'Tools',
            tools: ['GRAPHQL', 'GITHUB', 'BASH', 'LINUX', 'JAVA'],
            icon: 'https://i.imgur.com/fxS4cCu.png'

        },
        {
            name: 'Design',
            tools: ['PHOTOSHOP', 'GIMP', 'TILED', 'WORD', 'EXCEL'],
            icon: 'https://i.imgur.com/pTWXgRU.png'
        },
    ]

    return(
        <AboutPageWrapper>
            <AboutPageTable>
                <tbody>
                    <tr>
                        <td>
                            <AboutPagePicture src={PFP}/>
                        </td>
                        <td>
                            <AboutPageContent>
                                <AboutPageTitle>WHO AM I</AboutPageTitle>
                                <AboutPageText>
                                    <AboutPageInformation>
                                    Hi, I’m <ImportantWord>Ali!</ImportantWord> I am passionate about all things software development and <ImportantWord>solving problems.</ImportantWord> I am currently pursuing my <ImportantWord>Bachelor of Computer Science</ImportantWord> at the University of Windsor along with challenging myself with <ImportantWord>independent learning</ImportantWord> and <ImportantWord>side projects.</ImportantWord><br /><br />Most of my software development experience comes from working with <ImportantWord>full-stack</ImportantWord> applications but I am also very familiar with <ImportantWord>python</ImportantWord>, <ImportantWord>java</ImportantWord>, and <ImportantWord>C</ImportantWord> in non-web situations. <br /><br />Click the button below to download my <ImportantWord>resume</ImportantWord>.
                                    </AboutPageInformation>
                                </AboutPageText>
                                <ResumeButton href={Resume} download>Download My Resumé</ResumeButton>
                            </AboutPageContent>
                        </td>
                    </tr>
                </tbody>
            </AboutPageTable>
            <SkillsSection>
                <AboutPageTitle>SKILLS</AboutPageTitle>
                <SkillsContainer>
                    {
                        SKILLS.map((skill) => (
                            <SkillCard skill={skill} />
                        ))
                    }
                </SkillsContainer>
            </SkillsSection>
        </AboutPageWrapper>
    )
}

export default AboutPage;