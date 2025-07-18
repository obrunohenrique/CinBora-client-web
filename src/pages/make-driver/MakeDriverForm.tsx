import Header from "../../components/header/Header"
import Banner from "../../components/banner/Banner"
import CreateRideForm from "../../components/formcarona/CreateRide"
import './makedriverform.css'

export default function MakeDriverForm() {
    
    return(
        <>
            <Header/>
            <Banner  title="Ofereça uma Carona e CinBora!"/>
            <div className="fundo-form-carona">
                <CreateRideForm/>
            </div>
        </>
    )
}