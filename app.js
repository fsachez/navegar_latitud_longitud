function getPosition(){
    latitud = document.getElementById("lat").value;
    longitud = document.getElementById("lon").value; 
    var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],    
        view: new ol.View({
        center: ol.proj.fromLonLat([longitud, latitud]),
        zoom: 10
     })
    });
}
