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
  "bb_g": "Basketball Girls",
  "bd_b_a": "Badminton Boys A",
  "bd_b_b": "Badminton Boys B",
  "bd_g_a": "Badminton Girls A",
  "bd_g_b": "Badminton Girls B",
  "tn_b_a": "Tennis Boys A",
  "tn_b_b": "Tennis Boys B",
  "tn_g_a": "Tennis Girls A",
  "tn_g_b": "Tennis Girls B",
  "tt_b_a": "Table Tennis Boys A",
  "tt_b_b": "Table Tennis Boys B",
  "tt_g_a": "Table Tennis Girls A",
  "tt_g_b": "Table Tennis Girls B",
  "vb_b_a": "Volleyball Boys A",
  "vb_b_b": "Volleyball Boys B",
  "vb_g_a": "Volleyball Girls A",
  "vb_g_b": "Volleyball Girls B",
  "hk_b": "Hockey Boys",
  "hk_g": "Hockey Girls",
  "ath_b": "Athletics Boys",
  "ath_g": "Athletics Girls",
  "tb_g": "Throwball Girls",
  "bd_b": "Badminton Boys",
  "bd_g": "Badminton Girls",
  "tn_b": "Tennis Boys",
  "tn_g": "Tennis Girls",
  "tt_b": "Table Tennis Boys",
  "tt_g": "Table Tennis Girls",
  "vb_b": "Volleyball Boys",
  "vb_g": "Volleyball Girls"
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
};
