import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, type FormEvent } from "react";
import "./EditProfile.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


type UserProfile = {
    name: string;
    phone: string;
    gender: string;
    email: string;
};

const initialData: UserProfile = {
    name: "João Silva",
    phone: "(81) 91234-5678",
    gender: "Masculino",
    email: "joao.silva@email.com",
};

export default function EditProfile() {
    const [formData, setFormData] = useState({
        name: initialData.name,
        phone: initialData.phone,
        gender: initialData.gender,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Nome é obrigatório.";
        if (!formData.phone.trim()) {
            newErrors.phone = "Telefone é obrigatório.";
        } else if (!/^\(\d{2}\)\s\d\s\d{4}-\d{4}$/.test(formData.phone)) {
            newErrors.phone = "Telefone em formato inválido.";
        }
        if (!formData.gender) newErrors.gender = "Gênero é obrigatório.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        console.log("Dados enviados:", { ...formData, email: initialData.email });
        toast.success("Perfil atualizado com sucesso!");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const numericValue = value.replace(/\D/g, "").slice(0, 11); // só números, máx 11 dígitos
            let formatted = "";

            if (numericValue.length > 0) {
                formatted += "(" + numericValue.substring(0, 2);
            }
            if (numericValue.length >= 3) {
                formatted += ") " + numericValue.substring(2, 3);
            }
            if (numericValue.length >= 4) {
                formatted += " " + numericValue.substring(3, 7);
            }
            if (numericValue.length >= 8) {
                formatted += "-" + numericValue.substring(7, 11);
            }

            setFormData(prev => ({ ...prev, phone: formatted }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        setErrors(prev => ({ ...prev, [name]: "" }));
        setSuccess("");
    };

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // volta uma página no histórico
    };


    return (
        <div className="edit-profile-container">
            <button className="back-button-form" onClick={handleGoBack}>
                <FaArrowLeft />
            </button>
            <h2 className="edit-profile-title">Editar Perfil</h2>
            <form className="edit-profile-form" onSubmit={handleSubmit} noValidate>
                <div className="edit-profile-field">

                    <div className="container-line-inputs-profile">
                        <div className="edit-profile-field">
                            <label className="edit-profile-label">Email (não editável)</label>
                            <input
                                className="edit-profile-input edit-profile-input-readonly"
                                name="email"
                                type="email"
                                value={initialData.email}
                                readOnly
                            />
                        </div>
                        <div className="edit-profile-field">
                            <label className="edit-profile-label">Nome</label>
                            <input
                                className="edit-profile-input"
                                name="name"
                                type="text"
                                placeholder="Digite seu nome"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="edit-profile-error">{errors.name}</p>}
                        </div>
                    </div>
                </div>

                <div className="container-line-inputs-profile">
                    <div className="edit-profile-field">
                        <label className="edit-profile-label">Telefone</label>
                        <input
                            className="edit-profile-input"
                            name="phone"
                            type="text"
                            placeholder="Digite seu telefone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className="edit-profile-error">{errors.phone}</p>}
                    </div>
                    <div className="edit-profile-field">
                        <label className="edit-profile-label">Gênero</label>
                        <select
                            className="edit-profile-select"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                            <option value="Prefiro não informar">Prefiro não informar</option>
                        </select>
                        {errors.gender && <p className="edit-profile-error">{errors.gender}</p>}
                    </div>
                </div>



                <button className="edit-profile-button" type="submit">
                    Salvar Alterações
                </button>

                <ToastContainer position="top-right" autoClose={3000} theme="colored" />
            </form>
        </div>
    );
}
