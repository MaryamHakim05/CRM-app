import FormInput from "./FormInput";

function ProductList({ form, setForm }) {
  const { products } = form;
  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
  };

  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({
      ...form,
      products: newProducts,
    });
  };

  const removeHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index , 1);
    setForm({
        ...form,
        products: newProducts
    })
  }

  return (
    <div className="Products">
      <h3>Purchased Products</h3>
      {products.map((item, index) => (
        <div key={index} className="product-item">
          <FormInput
            type="text"
            name="name"
            label="Name"
            value={item.name}
            onChange={(e) => changeHandler(e, index)}
          />
          <div className="product-item-div">
            <FormInput
              type="number"
              name="price"
              label="price"
              value={item.price}
              onChange={(e) => changeHandler(e, index)}
            />
            <FormInput
              type="text"
              name="qty"
              label="quantity"
              value={item.qty}
              onChange={(e) => changeHandler(e, index)}
            />
          </div>
          <button onClick={() => removeHandler(index)} className="product-remove">Remove</button>
        </div>
      ))}
      <button onClick={addHandler} className="product-button">Add Item</button>
    </div>
  );
}

export default ProductList;
