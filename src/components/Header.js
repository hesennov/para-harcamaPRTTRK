
export default function Header({ total, money }) {
    return (
        <div className="header">
            harcayacak <span>  {(money - total).toFixed(2)} </span> paraniz kaldi

        </div>

    )
}