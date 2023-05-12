import { AboutPageWrapper, AboutPageTable, AboutPageTitle, AboutPageInformation, AboutPagePicture, AboutPageContent, AboutPageText, ResumeButton, SkillsSection, 
         SkillsContainer } from "./about-page.styles";
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
                                <AboutPageText>
                                    <AboutPageTitle>WHO AM I</AboutPageTitle>
                                    <AboutPageInformation>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet ac arcu a sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sodales cursus velit eu scelerisque. Aenean in tempus ante. Mauris consequat ac mauris eu sodales. <br /><br /> Duis quis mi et neque ultricies elementum. Morbi suscipit nulla neque, et porta mi commodo accumsan. Sed vulputate eros a enim euismod, sit amet semper tortor pharetra. Fusce et vestibulum velit. Etiam hendrerit feugiat tellus at varius. Fusce ultrices neque a justo auctor pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
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