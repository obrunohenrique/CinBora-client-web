import { useState } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { Input, List, Spin } from "antd";
import type { Location } from '../../types'


interface Props {
  label?: string;
  onSelect?: (value: Location) => void;
}


export default function LocationSearch({ label, onSelect }: Props) {
  const [address, setAddress] = useState("");

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    onSelect?.({
      "lat": latLng["lat"],
      "lng": latLng["lng"]
    });
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div style={{ width: 300 }}>
          {label && (
            <label 
              htmlFor="location-search-input" 
              style={{ display: "block", marginBottom: 4, marginTop: 4, fontSize: 18 }}
            >
              {label}
            </label>
          )}
          <Input
            id="location-search-input"
            {...getInputProps({ placeholder: "Digite um endereço" })}
            size="large"
          />
          <div style={{ position: "absolute", zIndex: 1000, width: 300 }}>
            {loading && (
              <div style={{ padding: "8px", textAlign: "center" }}>
          <Spin size="small" />
              </div>
            )}
            {suggestions.length > 0 && (
              <List
          bordered
          dataSource={suggestions}
          renderItem={(suggestion) => {
            const style = {
              backgroundColor: suggestion.active ? "#f0f0f0" : "#fff",
              cursor: "pointer",
            };
            return (
              <List.Item {...getSuggestionItemProps(suggestion, { style })}>
                {suggestion.description}
              </List.Item>
            );
          }}
          style={{ maxHeight: 200, overflowY: "auto" }}
              />
            )}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
