import { useState} from "react"

const InputText = ({text}) => {
    const [value, updateValue] = useState("")
    return (
        <div className="inputText">
            <label>{text}</label>
            <input type="text" value={value} onChange={e => updateValue(e.target.value)}></input>
        </div>
    )
}

export default InputText