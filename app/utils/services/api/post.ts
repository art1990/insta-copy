// env
//@ts-ignore
import { ACCESS_TOKEN, API_URL } from 'react-native-dotenv';
// axios
const axios = require('axios');
// types
import { TPaging } from 'store/post';

export const getAll = async (options: { paging: TPaging } | null = null) => {
  const params = {
    fields:
      'id,media_type,media_url,caption,username,timestamp,children{media_type,media_url,thumbnail_url}',
    access_token: ACCESS_TOKEN,
    limit: 4,
  };
  return options?.paging
    ? await axios.get(options?.paging.next)
    : await axios.get(API_URL + 'me/media', { params });
};
