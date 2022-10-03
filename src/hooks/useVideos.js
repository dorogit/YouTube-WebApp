import YouTube from "../APIs/YouTube";
import { useState,useEffect } from "react";

const useVideos = ({defaultSearchTerm}) => {
  const [videos, setVideos] = useState([])

  useEffect(()=> {
    search(defaultSearchTerm)
  }, [])

  const search = async value => {
    const response = await YouTube.get('/search', {
      params: {
        q: value
      }
    })
    setVideos(response.data.items)
  }
  return [videos, search]
}

export default useVideos;