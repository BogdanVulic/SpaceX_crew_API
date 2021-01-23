import axios from 'axios';

const CREW_URL = 'https://api.spacexdata.com/v4/crew';
const LAUNCHES_URL = 'https://api.spacexdata.com/v4/launches';

export const getCrew = () => axios.get(CREW_URL);
export const getLaunches = () => axios.get(LAUNCHES_URL);
