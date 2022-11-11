mapboxgl.accessToken = 'pk.eyJ1Ijoidml0amF6enoiLCJhIjoiY2l3c3liZnZpMDBiZTJ6bWFpbDA5Ym1hcyJ9.T6cpNveIfkobDqFaNCkYww';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/vitjazzz/cj5cn9atm09wc2smv3uola3r7', //hosted style id
    center: [22.400153,48.698639], // starting position
    zoom: 15 // starting zoom

});

// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

map.on('load', function () {
    // Add a layer showing the state polygons.
    map.addLayer({
        'id': 'da4',
		//'description':'PIB',
		
    });

// When a click event occurs on a feature in the states layer, open a popup at the
    // location of the click, with description HTML from its properties.
    map.on('click', 'da4', function (e) {
        
		new mapboxgl.Popup()
            .setLngLat(e.lngLat)
 //           .setHTML(e.features[0].properties.description)
    		.setHTML('ID '+ e.features[0].properties.IR +'</p>'+ e.features[0].properties.PIB + '</p>'+ e.features[0].properties.ADR+'</p>'+ e.features[0].properties.SN+'</p>'+ e.features[0].properties.Number)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the states layer.
    map.on('mouseenter', 'da4', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'da4', function () {
        map.getCanvas().style.cursor = '';
    });
});