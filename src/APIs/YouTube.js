import axios from 'axios'

const key = 'AIzaSyBfBLVYUF0E4DgNyOtGAbUIOUQ8HOaOn1E'

export default axios.create({
  baseURL: ' https://www.googleapis.com/youtube/v3/',
  params: {
    part : 'snippet',
    maxResults: 5,
    key: key
  }
})
