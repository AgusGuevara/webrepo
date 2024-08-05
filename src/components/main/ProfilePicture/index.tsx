import profile from "@/assets/images/profile.jpg";

const ProfilePicture = () => {
    return (
        <div className="w-[270px] h-auto">
            <img src={profile} className="grayscale"></img>
        </div>
    );
};

export default ProfilePicture;
