import axios from 'axios';

export const FETCH_CREATURES = 'fetch_creatures';
export const SELECT_CREATURE = 'select_creature';

const ROOT_URL = 'https://magical-creatures-api.herokuapp.com/api/v1/magical_creatures';

export function fetchCreatures() {
  const request = axios.get(`${ROOT_URL}`);
  return {
    type: FETCH_CREATURES,
    payload: request
  }
}

export function selectCreature(id) {
  const request = axios.get(`${ROOT_URL}/${id}`)
  return {
    type: SELECT_CREATURE,
    payload: request
  }
}
