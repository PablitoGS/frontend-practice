import {useState} from "react"

const Avatar = ({id, size, alt = 'avatar', name }) => {

  const [enabled, setEnabled] = useState(false)
  const classSetDisabled = enabled ? '' : 'disabled'
  const classSize =
    size === 'small' ? 'img-small':
    size === 'large' ? 'img-large'
  : ''
  const src= `https://randomuser.me/api/portraits/men/${id}.jpg`

  return (
    <div className="avatar">
      <picture className={classSize}>
        {
          id ? (
            <img
              className={classSetDisabled}
              src={src}
              alt={alt}
              id={id}
              onClick={() => {setEnabled(!enabled)}}/>
              ) : (<i>Sin avatar: </i>)
        }
        <strong>{enabled ? name : !id ? name: 'Desactivado'}</strong>
      </picture>
    </div>
  )
}


export default Avatar
