---
# ensures Jekyll properly reads file
---

/**
 * Load Google Analytics
 */
function loadGoogleAnalytics() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '{{ site.google_analytics.id }}');
}

/**
 * Load Google Maps
 */
// The following example creates complex markers to indicate locationes near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 52.4973063108, lng: 13.3621763999 },
    streetViewControl: false,
    mapTypeControl: false
  });
  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
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
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
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

window.initMap = initMap;

/**
 * Create a <script> element and appends it to the head element
 */
function appendScriptToHeadElement(src, callbackFunction) {
    var head = document.getElementsByTagName('head')[0];
    if (head) {
      var js = document.createElement("script");
      js.type = "text/javascript";
      js.src = src;
      head.appendChild(js);
    }
    if (callbackFunction != null) {            
      js.onload = callbackFunction;
    }
}

// waiting for the load event
window.addEventListener("load", function () {
    // initialise cookie consent banner
    window.cookieconsent.initialise({
        // cookie settings
        "palette": {
            "popup": {
                "background": "#efefef",
                "text": "#404040"
            },
            "button": {
                "background": "#8ec760",
                "text": "#ffffff"
            }
        },
        "type": "opt-in",
        "content": {
            "message": "Diese Website nutzt Cookies zur Darstellung einer Google Maps Karte und zur Analyse von Zugriffen.",
            "allow": "Annehmen",
            "dismiss": "Weiter ohne Zustimmung",
            "deny": "Weiter ohne Zustimmung",
            "link": "Mehr Informationen",
            "href": "/datenschutz",
            "policy": "Cookie Einstellungen",
            "revokable": true,
            "revokeBtn": '<div class="cc-revoke>Cookie Policy</div>'
        },
        // called at startup
        onInitialise: function (status) {
            var type = this.options.type;
            var didConsent = this.hasConsented();
            if (type == 'opt-in' && didConsent) {
              // enable Google Analytics
              loadGoogleAnalytics();

              // enable Google Maps
              document.getElementById("map").style.display = "block"
              appendScriptToHeadElement("https://maps.googleapis.com/maps/api/js?key={{ site.google_maps.api_key }}&callback=initMap", initMap);
            }
            if (type == 'opt-out' && !didConsent) {
              // disable cookies
            }
          },
          // called when the status changes
          onStatusChange: function(status, chosenBefore) {
            var type = this.options.type;
            var didConsent = this.hasConsented();
            if (type == 'opt-in' && didConsent) {
              // enable Google Analytics
              loadGoogleAnalytics();

              // enable Google Maps
              document.getElementById("map").style.display = "block"
              appendScriptToHeadElement("https://maps.googleapis.com/maps/api/js?key={{ site.google_maps.api_key }}&callback=initMap", initMap);
            }
            if (type == 'opt-out' && !didConsent) {
              // disable cookies
            }
          },
          // called when consent is revoked
          onRevokeChoice: function() {
            var type = this.options.type;
            if (type == 'opt-in') {
              // disable cookies
            }
            if (type == 'opt-out') {
              // enable cookies
              loadGAonConsent();
            }
          }
    })
});