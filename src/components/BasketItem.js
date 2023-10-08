export default function BasketItem({ item, product }) {
    return (
        <>

        <li className="basket-item">
            <b> {product.title}</b>  x {item.amount}
        </li>
       <img src={product.image} alt=""  width='70px' height='50px'/>
        </>
    )
}