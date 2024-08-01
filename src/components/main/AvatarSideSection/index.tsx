import ProfilePicture from "../ProfilePicture"
import Title from "../Title"

const AvatarSideSection = () => {
    return <div className='relative h-full' role='sidebar-avatar'>
        <Title />
        <ProfilePicture />
    </div>
}

export default AvatarSideSection