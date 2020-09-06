import React from 'react';
import { Map as LeafletMap, TileLayer, Circle, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';
import numeral from 'numeral';
import { getCountries, getCountry } from '../../store/selectors/covidSelectors';
import './Map.css';
import { ICountry } from '../../types';

const casesTypeColors = {
  cases: {
    hex: '#CC1034',
    rgb: 'rgb(204, 16, 52)',
    half_op: 'rgba(204, 16, 52, 0.5)',
    multiplier: 800,
  },
  recovered: {
    hex: '#7dd71d',
    rgb: 'rgb(125, 215, 29)',
    half_op: 'rgba(125, 215, 29, 0.5)',
    multiplier: 1200,
  },
  deaths: {
    hex: '#fb4443',
    rgb: 'rgb(251, 68, 67)',
    half_op: 'rgba(251, 68, 67, 0.5)',
    multiplier: 2000,
  },
};

interface IMapProps {
  casesType: string;
}

const Map: React.FC<IMapProps> = ({ casesType }) => {
  const countries = useSelector(getCountries);
  const country = useSelector(getCountry);

  return (
    <div className="map">
      <LeafletMap
        center={[
          country.countryInfo?.lat || 34.80746,
          country.countryInfo?.long || -40.4796,
        ]}
        zoom={4}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {countries.map((country: ICountry) => (
          <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            color={casesTypeColors.cases.hex}
            fillColor={casesTypeColors.cases.hex}
            fillOpacity={0.4}
            radius={Math.sqrt(country.cases) * casesTypeColors.cases.multiplier}
            key={country.countryInfo.iso2 + country.country}
          >
            <Popup>
              <div className="info-container">
                <div
                  className="info-flag"
                  style={{
                    backgroundImage: `url(${country.countryInfo.flag})`,
                  }}
                />
                <div className="info-name">{country.country}</div>
                <div className="info-confirmed">
                  Cases: {numeral(country.cases).format('0,0')}
                </div>
                <div className="info-recovered">
                  Recovered: {numeral(country.recovered).format('0,0')}
                </div>
                <div className="info-deaths">
                  Deaths: {numeral(country.deaths).format('0,0')}
                </div>
              </div>
            </Popup>
          </Circle>
        ))}
      </LeafletMap>
    </div>
  );
};

export default Map;
