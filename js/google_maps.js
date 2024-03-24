---
# ensures Jekyll properly reads file
---

// creates markers on a map of Berlin
function initMap() {
    const map = new google.maps.Map(document.getElementById("googlemaps"), {
        zoom: 13,
        center: { lat: {{ site.data.global.praxis_frankfurt_nordend_ost.lat }}, lng: {{ site.data.global.praxis_frankfurt_nordend_ost.long }} },
        streetViewControl: false,
        mapTypeControl: false,
        keyboardShortcuts: false
    });

    // data for markers
    const locations = [
        [{ lat: {{ site.data.global.praxis_frankfurt_nordend_ost.lat }}, lng: {{ site.data.global.praxis_frankfurt_nordend_ost.long }} }, '<a href="{{ site.data.global.praxis_frankfurt_nordend_ost.maps }}" rel="noopener" target="_blank">{{ site.data.global.praxis_frankfurt_nordend_ost.name }}</a>']
    ];

    // create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Create the markers.
    locations.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            // title: `${i + 1}. ${title}`,
            // label: `${i + 1}`,
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