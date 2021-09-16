const Avatar = ({userName,src}) => {
    return (
        <picture className="course-avatar">
            <img src={src} alt={userName}/>
        </picture>
    )
}

export default Avatar