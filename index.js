let map;
const position = { lat: 42.3507752636, lng: -71.0748797005 };
const taggerMapId = "2f1208d17811f870"
const testMapId = "e70c456f1629620a"

async function initMap() {
    const position = { lat: 42.3507752636, lng: -71.0748797005 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
        center: position,
        zoom: 15,
        mapTypeControl: false,
        mapId: testMapId,
    });

    for (let i in locations) {
        for (let x in locations[i]) {
            let lat = locations[i][x][0]
            let lng = locations[i][x][1]
            let position = { lat: lat, lng: lng };

            const marker = new AdvancedMarkerElement({
                map: map,
                position: position,
                title: "Worx!"
            });
        }
    }
}

var locations = [
    [[42.34681070122661, -71.08915855071963], [42.34777010948075, -71.0856120428559]],      // Boylston (SS), Hemenway tp Dalton
    [[42.34698908122273, -71.08917544164402], [42.347342329249074, -71.08790657569338]],    // Boylston (NS), Ipswitch to Mass Ave
    [[42.34734633942874, -71.08712347498951], [42.34735084657487, -71.0855013102442]],      // Cambria, Boylston to Dead end
    [[42.346976543698254, -71.08645480024657], [42.346801441967365, -71.08519231680387]],   // Scotia, St Cecilia to Dalton
    [[42.34648925159813, -71.08723533722441], [42.345530645957496, -71.08190109842798]],    // Belvidere, Mass Ave to Huntington Ave
    [[42.34592783269012, -71.08693195739481], [42.34555147020453, -71.08429525119142]],    // St Germain, Mass Ave to Dalton
    [[42.34543140316273, -71.08669140481311], [42.345842400906584, -71.08344863106285]],    // Clearway, Mass Ave to Belvidere
    [[42.345422045692516, -71.08943357428893], [42.3452103215781, -71.08770029408996]],    // Norway, Hemenway to Edgerly
    [[42.34631623843674, -71.08918516018542], [42.346598649298706, -71.08755689518543]],    // Haviland, Hemenway to Mass Ave
    [[42.34535439641728, -71.08868232079551], [42.34587743654601, -71.08802676784966]],    // Stoneholm, Norway to Edgerly
    [[42.34542184414152, -71.08942665962579], [42.34520086742539, -71.08769516751882]],    // Norway, Hemenway to Edgerly
    [[42.34460326561531, -71.0896528455358], [42.34435922723569, -71.08729479246686]],    // Burbank, Hemenway to Edgerly
    [[42.34405353691379, -71.0899005243609], [42.343382742995686, -71.08604695479198]],    // Westland Ave (NS), Hemenway to Mass Ave
    [[42.34681038964049, -71.08915451890884], [42.34405970496326, -71.08989114241106]],    // Hemenway, Boylston to Westland Ave
    [[42.346365998535134, -71.08820227414228], [42.34354227139164, -71.08680487961051]],    // Edgerly, Haviland to Westland Ave
    [[42.34747371489971, -71.08671208223582], [42.34645398707678, -71.08666338597375]],    // St Cecilia, Boylston to Belvidere
    [[42.34723376485494, -71.08760673690448], [42.34290594350567, -71.08508654721513]],    // Mass Ave, Boylston to Huntington Ave
    [[42.347797652580766, -71.08553527833178], [42.34626908105676, -71.08471350834871]]    // Dalton, Boylston to Belvidere
]

initMap();
