import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

let cache = null;
let lastFetchTime = null;

const CACHE_TTL = 1000 * 60 * 5; // 5 минут

export const getCampersFromCache = async () => {
  const now = Date.now();

  if (cache && now - lastFetchTime < CACHE_TTL) {
    return cache;
  }

  const response = await axios.get(BASE_URL);
  cache = response.data.items ?? response.data;
  lastFetchTime = now;

  return cache;
};