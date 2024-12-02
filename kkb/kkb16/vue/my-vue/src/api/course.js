import axios from 'axios';

export function getCourses() {
  return axios
    .get('/api/courses')
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
