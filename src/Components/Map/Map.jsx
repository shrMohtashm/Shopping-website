import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";


const Map = () => {
    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
      
        return position === null ? null : (
          <Marker position={position}>
            <Popup>شما اینجا هستید</Popup>
          </Marker>
        )
      } 
      return(
        <MapContainer
          center={{ lat: 35.70, lng: 51.40 }}
          zoom={10}
          scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      )
      }
  export default Map;

