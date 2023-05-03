---
# ensures Jekyll properly reads file
---

// creates markers on a map of Berlin
function initMap() {
    const map = new google.maps.Map(document.getElementById("googlemaps"), {
        zoom: 11,
        center: { lat: 52.4973063108, lng: 13.3621763999 },
        streetViewControl: false,
        mapTypeControl: false,
        keyboardShortcuts: false
    });

    // data for markers
    const locations = [
        [{ lat: {{ site.data.global.contact.praxis_berlin_mitte.lat }}, lng: {{ site.data.global.contact.praxis_berlin_mitte.long }} }, '<a href="{{ site.data.global.contact.praxis_berlin_mitte.maps }}" rel="noopener" target="_blank">{{ site.data.global.contact.praxis_berlin_mitte.name }}</a>'],
        [{ lat: {{ site.data.global.contact.praxis_berlin_steglitz.lat }}, lng: {{ site.data.global.contact.praxis_berlin_steglitz.long }} }, '<a href="{{ site.data.global.contact.praxis_berlin_steglitz.maps }}" rel="noopener" target="_blank">{{ site.data.global.contact.praxis_berlin_steglitz.name }}</a>']
    ];

    // create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Create the markers.
    locations.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${i + 1}. ${title}`,
            label: `${i + 1}`,
            optimized: false,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
    });

}

console.log("google-maps-loaded");