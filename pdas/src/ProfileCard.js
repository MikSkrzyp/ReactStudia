function ProfileCard({title,handler,image}) {
    // const title = props.title;
    // const handler = props.handler;
    //const {title,handler} = props;


    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={image} alt="Logo"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handler}</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileCard;