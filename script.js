var locations = [
  ["Skórzewo - parking Szkoła Podstawowa nr 1", 52.392230, 16.793983],
  ["Skórzewo - parking Galeria Malwowa", 52.396693, 16.802882],
  ["Plewiska - parking stacja ORLEN", 52.366856, 16.809760],
  ["Przeźmierowo - parking stacja Orlen", 52.419812, 16.789410],
  ["Batorowo - parking stacja BP Bukowska", 52.413252, 16.764589],
  ["Ławica - parking Netto", 52.4121785, 16.8325941],
  ["Ławica - parking siłownia Atlantis", 52.407597, 16.819891],
  ["Junikowo - parking przystanek Cmentarna", 52.385418, 16.838946],
  ["Ogrody - parking kościoła ul. Nowina", 52.416835, 16.878214],
  ["Os.Kwiatowe - parking Netto", 52.378642, 16.823928],
  ["Os.Kwiatowe - parking kościół", 52.383611, 16.820688],
  ["Biuro i Sala Wykładowa AUTO-S ul.Jesienna 18, Skórzewo", 52.400547, 16.784312],
  ["Dąbrówka - parking stacja Orlen", 52.381938, 16.744593],
  ["Dąbrowa - parking Chata Polska", 52.396823, 16.757426],
];
var osm = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var map = L.map('map', {
  // true by default, false if you want a wild map
  sleep: true,
  // time(ms) for the map to fall asleep upon mouseout
  sleepTime: 750,
  // time(ms) until map wakes on mouseover
  wakeTime: 750,
  // defines whether or not the user is prompted oh how to wake map
  sleepNote: true,
  // allows ability to override note styling
  sleepNoteStyle: { color: 'red' },
  // should hovering wake the map? (clicking always will)
  hoverToWake: false,
  // opacity (between 0 and 1) of inactive map
  sleepOpacity: .7

}).setView([52.402651, 16.826466], 12).addLayer(L.tileLayer(osm));

mapLink =
  '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; ' + mapLink + ' Contributors',
  maxZoom: 18,
}).addTo(map);

for (var i = 0; i < locations.length; i++) {
  marker = new L.marker([locations[i][1], locations[i][2]])
    .bindPopup(locations[i][0])
    .addTo(map);
}

