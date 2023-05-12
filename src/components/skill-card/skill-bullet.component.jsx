import { BulletWrapper } from "./skill-card.styles"

const SkillBullet = ({ name }) => (
    <BulletWrapper>
        <h3>&gt;  {name}</h3>
    </BulletWrapper>
)

export default SkillBullet;