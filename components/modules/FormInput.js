
function FormInput({type , name , label , value ,  onChange}) {
  return (
    <div className="form-input">
    <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} value={value} onChange={onChange}  />
    </div>
  )
}

export default FormInput
