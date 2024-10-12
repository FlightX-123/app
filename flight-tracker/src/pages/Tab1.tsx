import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonIcon, IonPage } from '@ionic/react';
import { personCircleOutline, closeCircleOutline } from 'ionicons/icons'; // Import the close icon
import CustomFlightCard from '../components/CustomFlightCard';

import './Tab1.css';

interface FlightInfo {
  flightNumber: string;
  date: string;
  departureCode: string;
  arrivalCode: string;
  departureAirport: string;
  arrivalAirport: string;
  status: string;
}

const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState<string>(''); // State for search text
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false); // State for input focus
  

  const user: string = 'Andre'; // Example user name

  const clearSearch = () => {
    setSearchText(''); // Clear the input text
    setIsSearchFocused(false); // Remove focus when clearing
  };

  // Sample flight data
  const filteredFlights: FlightInfo[] = [
    {
      flightNumber: '234567',
      date: '10/11/2024',
      departureCode: '20:00',
      arrivalCode: '22:00',
      departureAirport: 'Humberto Delgado',
      arrivalAirport: 'Orly',
      status: '2',
    },
    {
      flightNumber: '578',
      date: '10/11/2024',
      departureCode: '20:00',
      arrivalCode: '22:00',
      departureAirport: 'Humberto Delgado',
      arrivalAirport: 'Orly',
      status: '3',
    },
    {
      flightNumber: '65432',
      date: '10/11/2024',
      departureCode: '20:00',
      arrivalCode: '22:00',
      departureAirport: 'Humberto Delgado',
      arrivalAirport: 'Orly',
      status: '4',
    },
    {
      flightNumber: 's4563456',
      date: '10/11/2024',
      departureCode: '20:00',
      arrivalCode: '22:00',
      departureAirport: 'Humberto Delgado',
      arrivalAirport: 'Orly',
      status: '5',
    },
  ];

  return (
    <IonPage>
      <IonHeader className="custom-header">
        <div className="search-bar-container">
          <IonIcon icon={personCircleOutline} className="profile-icon" />
          <input
            type="text"
            className="custom-input"
            placeholder="Search"
            value={searchText}
            onFocus={() => setIsSearchFocused(true)} // Set focus when input is clicked
            onBlur={() => {
              // Delay the blur event slightly to allow cancel button click
              setTimeout(() => setIsSearchFocused(false), 100);
            }}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {isSearchFocused && (
            <IonButton 
              className="cancel-button" 
              onClick={clearSearch} 
              fill="clear" // Optional: Makes it look like a link
            >
              Cancel
            </IonButton>
          )}
        </div>
      </IonHeader>

      <IonContent className={isSearchFocused ? 'blurred-content' : ''}>
        {filteredFlights.map((flight) => (
          <CustomFlightCard
            key={flight.flightNumber}
            passenger={user}
            flightNumber={flight.flightNumber}
            date={flight.date}
            departureTime={flight.departureCode}
            arrivalTime={flight.arrivalCode}
            departureAirport={flight.departureAirport}
            arrivalAirport={flight.arrivalAirport}
            status={flight.status}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
