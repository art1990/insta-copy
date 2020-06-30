// env
import {ACCESS_TOKEN, API_URL} from 'react-native-dotenv';
// axios
const axios = require('axios');

export const getAll = async () => {
  const params = {
    fields:
      'id,media_type,media_url,caption,username,timestamp,children{media_type,media_url,thumbnail_url}',
    access_token: ACCESS_TOKEN,
    limit: 4,
  };
  return await axios.get(API_URL + 'me/media', {params});
};
