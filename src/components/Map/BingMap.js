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
            <div ref={this.mapRef} className="map" />
            // style={{ width: 800, height: innerHeight ? innerHeight : 671 }}
        )
        // return React.createElement("div", { ref: this.mapRef, className: "map" });
    }
    initMap() {
        const { mapOptions } = this.props
        const map = new Microsoft.Maps.Map(this.mapRef.current);

        if (mapOptions) {
            map.setOptions(mapOptions);
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

// const pushpinClicked = (e) => {
//      //Make sure the infobox has metadata to display.
//      if (e.target.metadata) {
//         //Set the infobox options with the metadata of the pushpin.
//         infobox.setOptions({
//             location: e.target.getLocation(),
//             title: e.target.metadata.title,
//             description: e.target.metadata.description,
//             visible: true
//         });
//     }
// }
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