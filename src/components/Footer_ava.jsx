import { useNavigate } from "react-router-dom"
export default function Footer_ava() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/home");
    };
    return (
            <footer className="footer_ava">
                <button className="botao_ava" onClick={handleClick}>Enviar avaliação</button>
            </footer>
    )
}