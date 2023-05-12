import SkillBullet from "./skill-bullet.component";

import { SkillWrapper, SkillTitle, SkillImageContainer, SkillImage } from "./skill-card.styles";

const SkillCard = ({ skill }) => {
    const { name, tools, icon } = skill;

    return(
        <SkillWrapper>
            <SkillImageContainer>
                <SkillImage src={icon}/>
            </SkillImageContainer>
            <SkillTitle>{ name }</SkillTitle>
            {
                tools.map((tool) => (
                    <SkillBullet name={tool} />
                ))
            }
        </SkillWrapper>
    )
}

export default SkillCard;