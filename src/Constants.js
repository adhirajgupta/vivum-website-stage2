import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7b0101', // Primary color
    },
    secondary: {
      main: '#f50057', // Secondary color (example)
    },
  },
});



export const convertPathName = (string) => {
  const mappings = {
    "fb_b": "Football Boys",
    "fb_g": "Football Girls",
    "bb_b": "Basketball Boys",
    "bb_g": "Basketball Girls"
  };

  // Check if the input string contains an underscore
  if (string.includes('_')) {
    return mappings[string] || string; // Return the mapped value or the original string if not found
  } else {
    // Check if the input string is in the mappings' values
    const lowerCaseString = string.toLowerCase();
    for (let key in mappings) {
      if (mappings[key].toLowerCase() === lowerCaseString) {
        return key;
      }
    }
    return string; // Return the original string if no match is found
  }
}

