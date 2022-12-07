import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import "../../styles/map-st.css";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDywhNkA4sDFJTCD04o5FD-rNtRpeyMw2s',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 43.218980, lng: 76.929745 }), []);

  return (
    <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}