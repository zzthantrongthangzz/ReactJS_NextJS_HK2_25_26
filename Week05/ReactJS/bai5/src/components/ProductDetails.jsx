import { useParams, useNavigate } from 'react-router-dom'

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleBuy = () => {
        navigate("/checkout");
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd' }}>
            <h3>Chi tiết sản phẩm: {id}</h3>
            <p>Chi tiết về sản phẩm mã {id}</p>
            
            <button onClick={handleBuy} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                Mua hàng
            </button>
        </div>
    )
}