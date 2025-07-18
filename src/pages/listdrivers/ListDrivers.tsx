import './listdrivers.css'

import Header from "../../components/header/Header"
import Banner from "../../components/banner/Banner"
import ListCars from "../../components/listcars/ListCars"

export default function ListDrivers() {
    
    return(
        <>
            <Header/>
            <Banner  title="Encontre Sua Carona e CinBora!"/>

            <h1 className='caronas-oferecidas'>Caronas Oferecidas</h1>

            <div className="cards-driver-container">
                <ListCars/>
            </div>
        </>
    )
}