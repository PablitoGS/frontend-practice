import { useState } from "react"

const Avatar = ({userName,id}) => {
    //const state = useState(true)
    //const enabled = state[0]
    //const setEnabled = state[1]
    const [enabled, setEnabled] = useState(false)
    const className = enabled ? '' : 'disabled'
    const src= `https://randomuser.me/api/portraits/men/${id}.jpg`

    return (
        <picture className="course-avatar">
            <img className={className} src={src} alt={userName} onClick={() => {
                setEnabled(!enabled)
            }}/>
        </picture>
    )
}

export default Avatar