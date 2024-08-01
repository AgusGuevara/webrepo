import profile from '@/assets/images/profile.jpg'

const ProfilePicture = () => {
    return <div className='absolute w-[305px] h-auto bottom-0'>
        <img src={profile} className='grayscale'></img>
    </div>
}

export default ProfilePicture
