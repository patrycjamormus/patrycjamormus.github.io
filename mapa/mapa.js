$(document).ready(function () {
  var geoserverUrl = "http://localhost:8080/geoserver";
  var selectedPoint = null;
  var source = null;
  var target = null;

  let map = L.map("map").setView([52.44972, 21.034916], 14);

  let danezOSM = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );
  let danezORTO = L.tileLayer(
    "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution"
  );


  //zrodlo 3
  let rzeczki = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms?",
    {
      layers: "geoportal_zegrze:OT_PTWP_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );
  // map.addLayer(rzeczki)

  let BUBD = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_BUBD_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  let BUIN = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_BUIN_L",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  let PTGN = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTGN_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  let PTKM = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTKM_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  let PTLZ = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTLZ_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  let PTNZ = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTNZ_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  let PTPL = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTPL_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  let PTRK = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTRK_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  let PTTR = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTTR_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  let PTUT = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTUT_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  let PTWZ = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTWZ_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  let PTZB = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_PTZB_A",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  let SKDR = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:OT_SKDR_L",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  let kompozycja = L.tileLayer.wms(
    "http://localhost:8080/geoserver/geoportal_zegrze/wms",
    {
      layers: "	geoportal_zegrze:kompozycja_warstw",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  let baseMaps = {
    "dane z OSM": danezOSM,
    "dane z ORTO": danezORTO,
    "dane z BDOT10k": kompozycja,
  };

  let overlayMaps = {
    rzeczki: rzeczki,
    "budowle in??ynierskie": BUIN,
    "grunty nieu??ytkowane": PTGN,
    "tereny pod drogami ko??owymi, szynowymi i lotniskowymi": PTKM,
    "tereny le??ny i zadrzewiony": PTLZ,
    "pozosta??y teren niezabudowany": PTNZ,
    place: PTPL,
    "ro??linno???? krzewiasta": PTRK,
    "ro??linno???? trawiasta i uprawa rolna": PTTR,
    "uprawa trwa??a": PTUT,
    "wyrobisko i zwa??owisko": PTWZ,
    "tereny zabudowane": PTZB,
    drogi: SKDR,
    budynki: BUBD,
  };

  var pathLayer = L.geoJSON(null);

  L.control.layers(baseMaps, overlayMaps).addTo(map);

  map.addLayer(danezOSM);

  var sourceMarker = L.marker([52.22786, 21.02153], {
    draggable: true,
  })
    .on("dragend", function (e) {
      selectedPoint = e.target.getLatLng();
      getVertex(selectedPoint);
      getRoute();
    })
    .addTo(map);

  var targetMarker = L.marker([52.22876, 21.021653], {
    draggable: true,
  })
    .on("dragend", function (e) {
      selectedPoint = e.target.getLatLng();
      getVertex(selectedPoint);
      getRoute();
    })
    .addTo(map);

  function getVertex(selectedPoint) {
    var url = `${geoserverUrl}/wfs?service=WFS&version=1.0.0
    &request=GetFeature&typeName=geoportal_zegrze:nearest_vertex
    &viewparams=x:${selectedPoint.lng};y:${selectedPoint.lat};&outputformat=application/json`
    $.ajax({  
    url: url,
      async: false,
      success: function (data) {
        console.log(data)
        loadVertex(
          data,
          selectedPoint.toString() === sourceMarker.getLatLng().toString()
        );
      },
    });
  }

  function loadVertex(response, isSource) {
    var features = response.features;
    map.removeLayer(pathLayer);
    if (isSource) {
      source = features[0].properties.id;
    } else target = features[0].properties.id;
  }

  function getRoute(){

var url = `${geoserverUrl}/wfs?service=WFS&version=1.0.0
&request=GetFeature&typeName=geoportal_zegrze:shortest_path
&viewparams=source:${source};target:${target};
&outputformat=application/json`;

$.getJSON(url, function(data) {
  map.removeLayer(pathLayer);
  pathLayer = L.geoJSON(data);
  map.addLayer(pathLayer);});
}

  }

);


