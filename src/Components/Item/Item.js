
const Item = (product) => {
  console.log(product)
  return (
    <div>
      <h2 className="titulos">{product.name}</h2>
      <h3>{product.price}</h3>
    </div>
  )
}

export default Item
