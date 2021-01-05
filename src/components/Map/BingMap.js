import * as React from "react";
import { loadBingApi, Microsoft } from "./BingMapLoader";


// const screenHeightInit = window.innerHeight;
// console.log('screenHeightInit', screenHeightInit);

export default class BingMap extends React.Component {
    constructor() {
        super(...arguments);
        this.mapRef = React.createRef();
    }
    componentDidMount() {
        const { bingMapKey } = this.props
        loadBingApi(bingMapKey).then(() => {
            this.initMap();
        });
    }
    render() {
        const { innerHeight } = this.props
        return (
            <div ref={this.mapRef} className="map" style={{ width: 800, height: innerHeight ? innerHeight : 620 }} />
            // style={{ width: 800, height: innerHeight ? innerHeight : 671 }}
        )
        // return React.createElement("div", { ref: this.mapRef, className: "map" });
    }
    initMap() {
        const { mapOptions, pushPin } = this.props
        let map, infobox;
        map = new Microsoft.Maps.Map(this.mapRef.current);

        //Create an infobox at the center of the map but don't show it.
        infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
            visible: false
        });

        //Assign the infobox to a map instance.
        infobox.setMap(map);

        if (mapOptions) {
            map.setOptions(mapOptions);
        }

        // add pindata
        if (pushPin.length) {
            for (var i = 0; i < pushPin.length; i += 1) {
                var pin = new Microsoft.Maps.Pushpin(pushPin[i].item);

                //Store some metadata with the pushpin.
                pin.metadata = {
                    title: pushPin[i].title || '',
                    text: pushPin[i].text || '',
                    description: pushPin[i].description || ''
                };

                //Add a click event handler to the pushpin.
                Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);

                //Add pushpin to the map.
                map.entities.push(pin);
            }
        }


        function pushpinClicked(e) {
            //Make sure the infobox has metadata to display.
            if (e.target.metadata) {
                //Set the infobox options with the metadata of the pushpin.
                infobox.setOptions({
                    location: e.target.getLocation(),
                    title: e.target.metadata.title,
                    text: e.target.metadata.text,
                    description: e.target.metadata.description,
                    visible: true
                });
            }
        }

        // add infoboxes, if any
        // if (pushPinsWithInfoboxes) {
        //     const infobox = new Maps.Infobox(map.current.getCenter(), {
        //         visible: false
        //     });
        //     infobox.setMap(map.current);
        //     addPushpinsWithInfoboxes(
        //         pushPinsWithInfoboxes,
        //         infobox,
        //         map.current,
        //         Maps
        //     );
        // }
        return map;
    }
}


// add pushpins with infoboxes
// const addPushpinsWithInfoboxes = React.useCallback(
//     (pushPinsToAdd, infobox, map, Maps) => {
//         removePushpins(map, Maps);
//         pushPinsToAdd.forEach(pushPin => {
//             const newPin = new Maps.Pushpin(pushPin.center, pushPin.options);
//             newPin.metadata = pushPin.metadata;
//             Maps.Events.addHandler(newPin, "mouseover", e => {
//                 infobox.setOptions({
//                     location: e.target.getLocation(),
//                     title: e.target.metadata.title,
//                     description: e.target.metadata.description,
//                     visible: true,
//                     htmlContent: pushPin.infoboxHtml
//                 });
//             });
//             Maps.Events.addHandler(newPin, "mouseout", e => {
//                 infobox.setOptions({
//                     visible: false
//                 });
//             });
//             map.entities.push(newPin);
//         });
//     },
//     []
// )