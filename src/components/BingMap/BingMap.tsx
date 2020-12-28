import * as React from "react";
import { loadBingApi, Microsoft } from "./BingMapLoader";

interface IMapProps {
  mapOptions?: any;
}

export default class BingMap extends React.Component<IMapProps, any> {


  private mapRef = React.createRef();

  public componentDidMount() {
    loadBingApi().then(() => {
      this.initMap();
    });
  }

  public render() {
    return <div ref={this.mapRef} className="map" />;
  }

  private initMap() {
    const { mapOptions } = this.props
    const map = new Microsoft.Maps.Map(this.mapRef.current);
    if (mapOptions) {
      map.setOptions(mapOptions);
    }
    return map;
  }
}
