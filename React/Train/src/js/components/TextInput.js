export default function TextInput({type = "text", value, onChange}){
    return (
        <input type={type} onChange={onChange} defaultValue = {value} />
    )
}
