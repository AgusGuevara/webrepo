import ProfilePicture from "../ProfilePicture"
import Title from "../Title"
import PanelSelector from "../PanelSelector"

const AvatarSideSection = () => {
    return <div className='relative h-full' role='sidebar-avatar'>
        <Title />
        <PanelSelector />
        <ProfilePicture />
    </div>
}

export default AvatarSideSection