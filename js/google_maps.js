---
# ensures Jekyll properly reads file
---

// creates markers on a map of Berlin
function initMap() {
    const map = new google.maps.Map(document.getElementById("googlemaps"), {
        zoom: 11,
        center: { lat: 52.4973063108, lng: 13.3621763999 },
        streetViewControl: false,
        mapTypeControl: false
    });
    setMarkers(map);
}

// data for markers
const locations = [
    [
        "{{ site.data.global.contact.praxis_berlin_mitte.name }}",
        {{ site.data.global.contact.praxis_berlin_mitte.lat }},
        {{ site.data.global.contact.praxis_berlin_mitte.long }}
        
    ],
    [
        "{{ site.data.global.contact.praxis_berlin_steglitz.name }}",
        {{ site.data.global.contact.praxis_berlin_steglitz.lat }},
        {{ site.data.global.contact.praxis_berlin_steglitz.long }}
    ]
];

function setMarkers(map) {
    // define shapes of clickable icon
    for (let i = 0; i < locations.length; i++) {
        const location = locations[i];

        new google.maps.Marker({
            position: { lat: location[1], lng: location[2] },
            map,
            title: location[0],
            zIndex: location[3],
        });
    }
}

console.log("google-maps-loaded");