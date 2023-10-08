import { useEffect } from "react"

export default function Product({ product, setBasket, basket, total, money }) {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id == product.id)
        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }

    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id == product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }



    return (
        <>
            <div className="product">
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
                <div className="price">${product.price}</div>
                <div className="actions">
                    <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>sat</button>
                    <span className="amount">{basketItem && basketItem.amount || 0}</span>
                    <button className="buy-btn" disabled={total + product.price > money} onClick={() => addBasket()}>satin al</button>
                </div>
                <style jsx> {`
            .product{
                padding:15px;
                background:#fff;
                border:1px solid #ddd;
                margin-bottom:20px;
                width:24%;
            }
            `}</style>
            </div>

        </>
    )
}