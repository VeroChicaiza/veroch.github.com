ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([828758.468780, 10060810.290198, 830374.671914, 10061686.746221]);
var wms_layers = [];

var format_catastrorural_0 = new ol.format.GeoJSON();
var features_catastrorural_0 = format_catastrorural_0.readFeatures(json_catastrorural_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_catastrorural_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_catastrorural_0.addFeatures(features_catastrorural_0);
var lyr_catastrorural_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_catastrorural_0, 
                style: style_catastrorural_0,
                interactive: true,
                title: '<img src="styles/legend/catastrorural_0.png" /> catastro rural'
            });

lyr_catastrorural_0.setVisible(true);
var layersList = [lyr_catastrorural_0];
lyr_catastrorural_0.set('fieldAliases', {'cod_catast': 'cod_catast', 'cod_cata_1': 'cod_cata_1', 'nombre_lot': 'nombre_lot', 'AREA': 'AREA', });
lyr_catastrorural_0.set('fieldImages', {'cod_catast': '', 'cod_cata_1': '', 'nombre_lot': '', 'AREA': '', });
lyr_catastrorural_0.set('fieldLabels', {'cod_catast': 'inline label', 'cod_cata_1': 'inline label', 'nombre_lot': 'inline label', 'AREA': 'inline label', });
lyr_catastrorural_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});