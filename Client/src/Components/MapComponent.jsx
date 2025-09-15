import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

const MapComponent = ({ address }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken =
      "pk.eyJ1IjoicmFqLXAxNSIsImEiOiJjbTY0NmVkM3UxZWkyMmtxdGQ0aWM5ZnpqIn0.C6GXKLUnkF2PsmE0nK40fw";

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [74.2437, 16.7057],
      zoom: 12,
    });

    if (address) {
      const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
      )}.json?access_token=${mapboxgl.accessToken}`;

      fetch(geocodeUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.features && data.features.length > 0) {
            const coordinates = data.features[0].geometry.coordinates;

            map.flyTo({
              center: coordinates,
              essential: true,
              zoom: 12,
            });
          } else {
            alert("Address not found");
          }
        })
        .catch((error) => {
          console.error("Error fetching geocode data:", error);
        });
    }

    return () => map.remove();
  }, [address]);

  return <div ref={mapContainerRef} className="w-full h-96" />;
};

export default MapComponent;
