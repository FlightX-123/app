import React from 'react';
import { IonCard, IonCardContent, IonRow, IonCol } from '@ionic/react';
import './CustomFlightCard.css';  // Custom CSS for styling

interface ContainerProps {
    passenger : string, 
    flightNumber: string,
    date : string,
    departureTime : string,
    arrivalTime : string,
    departureAirport: string,
    arrivalAirport : string,
    status :string
}

const CustomFlightCard: React.FC<ContainerProps> = ({ 
    passenger, 
    flightNumber,
    date,
    departureTime,
    arrivalTime,
    departureAirport,
    arrivalAirport,
    status 
}) => {
    return (
        <IonCard className="flight-card">
            <IonCardContent className="flight-card-content">
                {/* Passenger name and flight date */}
                <IonRow className="flight-card-header">
                    <IonCol className="passenger-name">
                        {passenger}
                    </IonCol>
                    <IonCol size="auto" className="flight-date">
                        {date}
                    </IonCol>
                </IonRow>

                {/* Flight number */}
                <IonRow className="flight-details">
                    <IonCol className="flight-number">
                        Flight - {flightNumber}
                    </IonCol>
                </IonRow>

                {/* Flight path (departure and arrival times) */}
                <IonRow className="flight-path">
                    <IonCol className="departure-code airport-code">
                        {departureTime}
                    </IonCol>
                    <IonCol size="auto" className="flight-line">
                        <span className="dot"></span>
                        <span className="line"></span>
                        <span className="dot"></span>
                    </IonCol>
                    <IonCol className="arrival-code airport-code">
                        {arrivalTime}
                    </IonCol>
                </IonRow>

                {/* Airport names */}
                <IonRow className="airport-names">
                    <IonCol className="departure-airport airport-name">
                        {departureAirport}
                    </IonCol>
                    <IonCol className="arrival-airport airport-name" size="auto">
                        {arrivalAirport}
                    </IonCol>
                </IonRow>
            </IonCardContent>
        </IonCard>
    );
};

export default CustomFlightCard;
