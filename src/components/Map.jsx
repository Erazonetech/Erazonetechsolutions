import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

// ✅ Fix marker icons properly
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom marker icon (optional)
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Component to update map center
function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

// Main Map Component
function OSMMap({ 
  
  center = [6.866157630089231, 37.76415260882915],
  zoom = 15,
  markers = [],
  height = '400px',
  width = '100%',
  darkMode = true,
  showPopup = true,
}) {
  // Default marker if none provided
  const defaultMarkers = [
    {
      id: 1,
      position: center,
      title: 'Era Zone Technology Solutions',
      description: 'Addis Ababa, Ethiopia Wolaita Sodo',
    },
  ];

  const mapMarkers = markers.length > 0 ? markers : defaultMarkers;

  return (
    <div className="osm-map-container" style={{ height, width }}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        className="osm-map"
      >
        <ChangeView center={center} zoom={zoom} />
        
        {/* Standard OSM Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Dark Theme Tiles (optional - uncomment to use) */}
        {/* {darkMode && (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
        )} */}

        {mapMarkers.map((marker) => (
          <Marker 
            key={marker.id} 
            position={marker.position}
            icon={marker.icon || customIcon}
          >
            {showPopup && (
              <Popup>
                <div className="custom-popup">
                  <h4>{marker.title}</h4>
                  <p>{marker.description}</p>
                  {marker.phone && <p>📞 {marker.phone}</p>}
                  {marker.email && <p>✉️ {marker.email}</p>}
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default OSMMap;