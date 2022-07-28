import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-country-world-map',
  templateUrl: './country-world-map.component.html',
  styleUrls: ['./country-world-map.component.css']
})
export class CountryWorldMapComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      // Create map instance
      let chart = am4core.create("chartdiv", am4maps.MapChart);
      
      // Set map definition
      chart.geodata = am4geodata_worldLow;
      
      // Set projection
      chart.projection = new am4maps.projections.Miller();
      
      // Create map polygon series
      let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
      
      // Exclude Antartica
      polygonSeries.exclude = ["AQ"];
      
      // Make map load polygon (like country names) data from GeoJSON
      polygonSeries.useGeodata = true;
      
      // Configure series
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.polygon.fillOpacity = 0.6;
      
      
      // Create hover state and set alternative fill color
      let hs = polygonTemplate.states.create("hover");
      hs.properties.fill = chart.colors.getIndex(0);
      
      // Add image series
      let imageSeries = chart.series.push(new am4maps.MapImageSeries());
      imageSeries.mapImages.template.propertyFields.longitude = "longitude";
      imageSeries.mapImages.template.propertyFields.latitude = "latitude";
      imageSeries.mapImages.template.tooltipText = "{title}";
      imageSeries.mapImages.template.propertyFields.url = "url";
      
      let circle = imageSeries.mapImages.template.createChild(am4core.Circle);
      circle.radius = 3;
      circle.propertyFields.fill = "color";
      circle.nonScaling = true;
      
      let circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
      circle2.radius = 3;
      circle2.propertyFields.fill = "color";
      
      
      circle2.events.on("inited", function(event){
        animateBullet(event.target);
      })
      
      
      function animateBullet(circle: am4core.Circle) {
          let animation = circle.animate([{ property: "scale", from: 1 / chart.zoomLevel, to: 5 / chart.zoomLevel }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
          animation.events.on("animationended", function(event: { target: { object: any; }; }){
            animateBullet(event.target.object);
          })
      }
      
      let colorSet = new am4core.ColorSet();
      
      imageSeries.data = [ {
        "title": "Portugal's Instruments",
        "latitude": 38.736946,
        "longitude": -9.142685,
        "url": "",
        "color":colorSet.next()
      }, {
        "title": "Japan's Instruments",
        "latitude": 35.6785,
        "longitude": 139.6823,
        "url": "",
        "color":colorSet.next()
      }, {
        "title": "Italy's Instruments",
        "latitude": 41.8719,
        "longitude": 12.5674,
        "url": "",
        "color":colorSet.next()
      } ];
    });
  }
}
