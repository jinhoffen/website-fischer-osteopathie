---
# ensures Jekyll properly reads file
---

// Create Map with GoogleMaps
function initMap() {
    // Create object
    const map = new google.maps.Map(document.getElementById("googlemaps"), {
        zoom: 13,
        center: { 
            lat: {{ site.data.global.praxis_frankfurt_nordend_ost.lat }},
            lng: {{ site.data.global.praxis_frankfurt_nordend_ost.long }}
        },
        streetViewControl: false,
        mapTypeControl: false,
        keyboardShortcuts: false,
        mapId: "MAP_PRACTICE_LOCATIONS",
    });

    // Collect markers' location and title
    const locations = [[
        { 
            lat: {{ site.data.global.praxis_frankfurt_nordend_ost.lat }},
            lng: {{ site.data.global.praxis_frankfurt_nordend_ost.long }} 
        }, 
        '<a href="{{ site.data.global.contact.google }}" rel="noopener" target="_blank">{{ site.data.global.praxis_frankfurt_nordend_ost.name }}</a>'
    ]];

    // Set markers' info window
    const infoWindow = new google.maps.InfoWindow();

    // Create markers
    locations.forEach(([position, title], i) => {
        // Configure pin
        const pin = new google.maps.marker.PinElement({
            glyph: `${i + 1}`,
            scale: 1,
        });

        // Create marker
        const marker = new google.maps.marker.AdvancedMarkerElement({
            map,
            position: position,
            title: `${title}`,
            content: pin.element,
            gmpClickable: true,
        });

        // Add a click event listener for each marker, and set up the info window.
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.title);
            infoWindow.open(marker.map, marker);
        });
    });

}

console.log("google-maps-loaded");