const Avatar = ({userName,id}) => {
    const src= `https://randomuser.me/api/portraits/men/${id}.jpg`
    return (
        <picture className="course-avatar">
            <img src={src} alt={userName}/>
        </picture>
    )
}

export default Avatar