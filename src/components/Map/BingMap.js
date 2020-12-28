import * as React from "react";
import { loadBingApi, Microsoft } from "./BingMapLoader";

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
        return React.createElement("div", { ref: this.mapRef, className: "map" });
    }
    initMap() {
        const { mapOptions } = this.props
        const map = new Microsoft.Maps.Map(this.mapRef.current);
        if (mapOptions) {
            map.setOptions(mapOptions);
        }
        return map;
    }
}