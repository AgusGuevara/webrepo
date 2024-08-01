import ProfilePicture from "../ProfilePicture"
import Title from "../Title"

const AvatarSideSection = () => {
    return <div className='relative w-1/6 h-screen' role='sidebar-avatar'>
        <Title />
        <ProfilePicture />
    </div>
}

export default AvatarSideSection