import React from 'react';
import { IonSearchbar, IonIcon } from '@ionic/react';
import { personCircleOutline, closeCircleOutline, trash } from 'ionicons/icons'; // Make sure this is included


interface ContainerProps {
  onFocus: () => void;
  onBlur: () => void;
  user: string; // Pass user info as prop
}

const NavigationBar: React.FC<ContainerProps> = ({ onFocus, onBlur, user }) => {
    
  return (
    <div className="search-bar-container">
      <IonIcon icon={personCircleOutline} className="profile-icon" />
      <IonSearchbar
        className="custom-searchbar"
        showCancelButton="focus"
        cancelButtonIcon={trash}
        placeholder="Search"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default NavigationBar;
