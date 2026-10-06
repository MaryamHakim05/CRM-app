import FormInput from './FormInput'
import ProductList from './ProductList';

function Form({form , setForm}) {
    const changeHandler = (e) => {
        const {name , value} = e.target;
        setForm({
            ...form,
            [name] : value
        })
    }
  return (
    <div className='form'>
      <FormInput type="text" name="name" label="Name" value={form.name} onChange={changeHandler} />
      <FormInput type="text" name="lastName" label="Last name" value={form.lastName} onChange={changeHandler} />
      <FormInput type="text" name="email" label="Email" value={form.email} onChange={changeHandler} />
      <FormInput type="text" name="phone" label="Phone" value={form.phone} onChange={changeHandler} />
      <FormInput type="text" name="address" label="Address" value={form.address} onChange={changeHandler} />
      <FormInput type="text" name="postalCode" label="Postal code" value={form.postalCode} onChange={changeHandler} />
      <FormInput type="date" name="date" label="Date" value={form.date} onChange={changeHandler} />
      <ProductList form={form} setForm={setForm} />
    </div>
  )
}

export default Form
