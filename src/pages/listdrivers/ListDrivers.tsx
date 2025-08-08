import './listdrivers.css'

import Header from "../../components/header/Header"
import RidesList from "../../components/rides-list"
import LocationSearch from '../../components/location-search'
import { Button, Flex, TimePicker } from 'antd'
import { useState } from 'react'
import type { Location } from '../../types'
import api from '../../api'
import { toast, ToastContainer } from 'react-toastify'
import type { Dayjs } from 'dayjs'

export default function ListDrivers() {
    
    const [pickupLocation, setPickupLocation] = useState<Location | null>(null)
    const [dropoffLocation, setDropoffLocation] = useState<Location | null>(null)
    const [pickupTime, setPickupTime] = useState<string | null>(null)
    const [rides, setRides] = useState([])
    const [ridesLoading, setRidesLoading] = useState(false)
    
    function handlePickupLocationSelect(value: Location) {
        setPickupLocation(value);
    }

    function handleDropoffLocationSelect(value: Location) {
        setDropoffLocation(value);
    }

    function handleTimePick(time: Dayjs) {
        if (!time) {
            setPickupTime(null)
            return
        }
        const timeISOString = time.toDate().toISOString();
        setPickupTime(timeISOString)  
    }

    async function handleSearch() {
        if (!pickupLocation || !dropoffLocation || !pickupTime) {
            toast.error("Preencha todos os campos para procurar")
            return;
        };

        try {
            setRidesLoading(true)
            const { data } = await api.get('/travel/', {
                params: {
                    origin_latitude: pickupLocation.lat,
                    origin_longitude: pickupLocation.lng,
                    destination_latitude: dropoffLocation.lat,
                    destination_longitude: dropoffLocation.lng,
                    radius: 3000,
                }
            });

            if (Array.isArray(data) && data.length === 0) {
                toast.error("Não há caronas para você agora 😭")
            }

            setRides(data)
        } catch (error) {
            console.error('Failed to fetch rides:', error)
        } finally {
            setRidesLoading(false)
        }
    }

    return(
        <main className='background'>
            <Header/>
            <Flex justify='center' align='end' gap={24}>
                <LocationSearch label='Selecione partida 📍' onSelect={handlePickupLocationSelect} />
                <LocationSearch label='Selecione destino 📍' onSelect={handleDropoffLocationSelect} />
                <TimePicker placeholder='Horário' size='large' needConfirm onChange={handleTimePick}/>
                <Button size='large' onClick={handleSearch}>
                    Buscar
                </Button>
            </Flex>
            <div className="cards-driver-container">
                <RidesList rides={rides} ridesLoading={ridesLoading} />
            </div>
            <ToastContainer position="top-right" autoClose={3000} theme='colored'/>
        </main>
    )
}