import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import EditProfile from "../../components/edit-user-form/Edit-user-form";
import "./profilepage.css";

export default function Profile() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // volta uma página no histórico
    };

    return (
        <div className="container-profile">
            <div className="container-sobreposicao-profile">
                <button className="back-button" onClick={handleGoBack}>
                    <FaArrowLeft />
                </button>
                <EditProfile />
            </div>
        </div>
    );
}
