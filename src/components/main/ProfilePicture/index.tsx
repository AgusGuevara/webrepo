import profile from "@/assets/images/itsame.webp";

const ProfilePicture: () => JSX.Element = () => {
    return (
        <div className="lg:w-[270px] w-[105px] h-28 lg:order-3 order-2 lg:h-auto">
            <img src={profile} className="grayscale" alt="aguevara-pfp"></img>
        </div>
    );
};

export default ProfilePicture;
