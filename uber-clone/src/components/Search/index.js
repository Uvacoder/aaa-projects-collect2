import React, { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles';

export default function Search({ onLocationSelected }) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <GooglePlacesAutocomplete
      placeholder="Para onde?"
      placeholderTextColor="#333"
      onPress={onLocationSelected}
      query={{
        key: "API_KEY",
        language: "pt"
      }}
      textInputProps={{
        onFocus: () => {
          setSearchFocused(true)
        },
        onBlur: () => {
          setSearchFocused(false)
        },
        autoCapitalize: "none",
        autoCorrect: false
      }}
      listViewDisplayed={searchFocused}
      fetchDetails
      enablePoweredByContainer={false}
      styles={styles}
    />
  );
}
