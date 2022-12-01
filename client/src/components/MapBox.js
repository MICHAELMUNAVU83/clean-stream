import React, { useState } from 'react';
import Map, { Marker, NavigationControl, Popup, GeolocateControl, FullscreenControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import smartbins from '../data/smartbins.json';

const MapBox = ({ user }) => {

  const mapToken = "pk.eyJ1IjoiYW5uZXRvdG9oIiwiYSI6ImNsYjRvOTNnazAxYW8zeG1kanM5MTdvZjAifQ.brOdfnP5NoJehkfRitJNxw"

  const [selectedBin, setSelectedBin] = useState(null);

  // If bin capacity is 0, set <i></i> to red, else set to green

  const binColor = (bin) => {
    if (bin.capacity === 0) {
      return "red"
    } else {
      return "green"
    }
  }

  return (
    <>
    <div className='map-container'>
        <div className='map'>
          <Map
            style={{
              margin: 'auto',
              width: "500px",
              height: "500px",
              border: "2px solid black",
              borderRadius: "5px",
              marginTop: "20px"
            }}
            initialViewState={{
              latitude: user? user.location.latitude : -1.2921,
              longitude: user? user.location.longitude : 36.8219,
              zoom: 10
            }}
            mapboxAccessToken={mapToken} 
            mapStyle="mapbox://styles/mapbox/streets-v11" 
          >
              <NavigationControl 
            showCompass={true}
            position="bottom-right"
            />

{
            smartbins.smartbins.map(bin => (
              <Marker
                color="red"
                key={bin.id}
                latitude={bin.latitude}
                longitude={bin.longitude}
              >
                {
                  bin.capacity < 20 ? <i className="fa-solid fa-dumpster" style={{color: "red"}}></i> : bin.capacity < 50 ? <i className="fa-solid fa-dumpster" style={{color: "orange"}}></i> : <i className="fa-solid fa-dumpster" style={{color: "green"}}></i> 
                }
                   
              </Marker>
            ))
          }
         {
            selectedBin? (
                <Popup
                  latitude={selectedBin.latitude}
                  longitude={selectedBin.longitude}
                  onClose={() => {
                    setSelectedBin(null)
                  }}
                 >
                  <div>
                    {selectedBin.name}
                  </div>
                </Popup> 
            ) : null
              
         }

        <GeolocateControl
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        showUserLocation={true}
        />

        < FullscreenControl
        container={document.querySelector('body')}
        />

          </Map>
        </div>
      </div>
    </>
  )
}

export default MapBox