var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_wody_polskie = new ol.layer.Tile({

            source: new ol.source.TileWMS(({
                url: "https://wody.isok.gov.pl/gpservices/KZGW/MZP20_Glebokosc_WysokiePrawdopodPowodzi/MapServer/WMSServer",
              attributions: 'Gugik',
              params: {
                "LAYERS": "4",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: 'Wody Powierzchniowe',
            opacity: 1.000000,
 
          });
        wms_layers.push([lyr_wody_polskie, 0]);


        

        var lyr_zagrozenie_wodne = new ol.layer.Tile({

            'title': 'Zagrożenie powodziowe',
            'opacity': 1.000000,
            source: new ol.source.TileWMS(({
                url: 'https://wody.isok.gov.pl/gpservices/KZGW/MZP20_Predkosc_WysokiePrawdopodPowodzi/MapServer/WMSServer?',
              attributions: 'Gugikk',
              params: {
                "LAYERS": "2",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
          
 
          });
        wms_layers.push([lyr_zagrozenie_wodne, 0]);


var format_siatka_A_B_2 = new ol.format.GeoJSON();
var features_siatka_A_B_2 = format_siatka_A_B_2.readFeatures(json_siatka_A_B_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_A_B_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_A_B_2.addFeatures(features_siatka_A_B_2);
var lyr_siatka_A_B_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_A_B_2, 
                style: style_siatka_A_B_2,
                popuplayertitle: 'siatka_A_B',
                interactive: false,
    title: 'siatka_A_B<br />\
    <img src="styles/legend/siatka_A_B_2_0.png" /> -100 - -61<br />\
    <img src="styles/legend/siatka_A_B_2_1.png" /> -61 - -18<br />\
    <img src="styles/legend/siatka_A_B_2_2.png" /> -18 - 20<br />\
    <img src="styles/legend/siatka_A_B_2_3.png" /> 20 - 63<br />\
    <img src="styles/legend/siatka_A_B_2_4.png" /> 63 - 100<br />'
        });
var format_VMap_3 = new ol.format.GeoJSON();
var features_VMap_3 = format_VMap_3.readFeatures(json_VMap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMap_3.addFeatures(features_VMap_3);
var lyr_VMap_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMap_3, 
                style: style_VMap_3,
                popuplayertitle: 'VMap',
                interactive: false,
                title: '<img src="styles/legend/VMap_3.png" /> VMap'
            });
var format_Sentinel_4 = new ol.format.GeoJSON();
var features_Sentinel_4 = format_Sentinel_4.readFeatures(json_Sentinel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel_4.addFeatures(features_Sentinel_4);
var lyr_Sentinel_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel_4, 
                style: style_Sentinel_4,
                popuplayertitle: 'Sentinel',
                interactive: false,
                title: '<img src="styles/legend/Sentinel_4.png" /> Sentinel'
            });
var format_Bug_historyczny_5 = new ol.format.GeoJSON();
var features_Bug_historyczny_5 = format_Bug_historyczny_5.readFeatures(json_Bug_historyczny_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bug_historyczny_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bug_historyczny_5.addFeatures(features_Bug_historyczny_5);
var lyr_Bug_historyczny_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bug_historyczny_5, 
                style: style_Bug_historyczny_5,
                popuplayertitle: 'Bug_historyczny',
                interactive: false,
                title: '<img src="styles/legend/Bug_historyczny_5.png" /> Bug_historyczny'
            });

lyr_OSMStandard_0.setVisible(true);
lyr_GoogleSatellite_1.setVisible(true);
lyr_siatka_A_B_2.setVisible(false);
lyr_VMap_3.setVisible(true);
lyr_zagrozenie_wodne.setVisible(true);
lyr_Sentinel_4.setVisible(true);
lyr_Bug_historyczny_5.setVisible(true);
lyr_wody_polskie.setVisible(true);

var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_siatka_A_B_2,lyr_VMap_3,lyr_Sentinel_4,lyr_Bug_historyczny_5,lyr_wody_polskie, lyr_zagrozenie_wodne];
lyr_siatka_A_B_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'Procent_A': 'Procent_A', 'Procent_B': 'Procent_B', 'Procent_C': 'Procent_C', 'roznica_A_': 'roznica_A_', 'roznica_B_': 'roznica_B_', 'roznica_A1': 'roznica_A1', 'roznica__1': 'roznica__1', });
lyr_VMap_3.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'pow': 'pow', 'obw': 'obw', 'wsp_zw': 'wsp_zw', });
lyr_Sentinel_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'InPoly_FID': 'InPoly_FID', 'pow': 'pow', 'obw': 'obw', 'wsp_zw': 'wsp_zw', });
lyr_Bug_historyczny_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Id': 'Id', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Pow': 'Pow', 'Obwod': 'Obwod', 'Wsp_zw': 'Wsp_zw', });
lyr_siatka_A_B_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'Procent_A': 'TextEdit', 'Procent_B': 'TextEdit', 'Procent_C': 'TextEdit', 'roznica_A_': 'TextEdit', 'roznica_B_': 'TextEdit', 'roznica_A1': 'TextEdit', 'roznica__1': 'TextEdit', });
lyr_VMap_3.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'pow': 'TextEdit', 'obw': 'TextEdit', 'wsp_zw': 'TextEdit', });
lyr_Sentinel_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'InPoly_FID': 'TextEdit', 'pow': 'TextEdit', 'obw': 'TextEdit', 'wsp_zw': 'TextEdit', });
lyr_Bug_historyczny_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Id': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Pow': 'TextEdit', 'Obwod': 'TextEdit', 'Wsp_zw': 'TextEdit', });
lyr_siatka_A_B_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'Procent_A': 'no label', 'Procent_B': 'no label', 'Procent_C': 'no label', 'roznica_A_': 'no label', 'roznica_B_': 'no label', 'roznica_A1': 'no label', 'roznica__1': 'no label', });
lyr_VMap_3.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'pow': 'no label', 'obw': 'no label', 'wsp_zw': 'no label', });
lyr_Sentinel_4.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'InPoly_FID': 'no label', 'pow': 'no label', 'obw': 'no label', 'wsp_zw': 'no label', });
lyr_Bug_historyczny_5.set('fieldLabels', {'Shape_Leng': 'no label', 'Id': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'Pow': 'no label', 'Obwod': 'no label', 'Wsp_zw': 'no label', });
lyr_Bug_historyczny_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});