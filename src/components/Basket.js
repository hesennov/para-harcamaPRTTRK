import BasketItem from "./BasketItem";
import "../index.css";
export default function Basket({ basket, products, total, resetBasket }) {
    return (
        <>
            <div className="basket-container container">
                <h3>Alisveris detaylari</h3>
                <ul>
                    {basket.map((item) => (
                        <BasketItem
                            item={item}
                            key={item.id}
                            product={products.find((p) => p.id === item.id)}
                        />
                    ))}
                </ul>
                <div className="total">
                    toplam :{Math.floor(total)}
                </div>

                <button className="basket-reset" onClick={resetBasket}>sepeti sifirla</button>
            </div>
            <style jsx>
                {`
          .container {
            width: 1000px;
            margin: 0 auto;
          }
          .basker-container{
            padding:20px;
          }
        `}
            </style>
        </>
    );
}
// {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}$
