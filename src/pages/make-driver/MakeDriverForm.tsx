import Header from "../../components/header/Header"
import CreateRideForm from "../../components/formcarona/CreateRide"
import './makedriverform.css'

export default function MakeDriverForm() {

    return (
        <>
            <main className="background">
                <Header />
                {/* <Banner  title="Ofereça uma Carona e CinBora!"/> */}
                <div className="form-criar-carona-caixa">
                    <CreateRideForm />
                </div>
            </main>
        </>
    )
}