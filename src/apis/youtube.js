import axios from 'axios';

const KEY = 'AIzaSyA0jOUNoaYe7Dvl4GrJ63X4vx3wLcejKDk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});