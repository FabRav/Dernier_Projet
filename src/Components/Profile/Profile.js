import "@/Components/Profile/Profile.css";

function Profile({ host }) {

    const picture = host.picture;
    const name = host.name;

    return (
        <div className="Profile">
            <div className="Profile_Name">{name}</div>
            <div className="Profile_Picture_Box">
                <img className="Profile_Picture" src={picture} alt="" />
            </div>
        </div>
    );
}

export default Profile;