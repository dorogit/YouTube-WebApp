import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import YouTube from "../APIs/YouTube";
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail";

const App = () => {

  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const onValueSubmit = async value => {
    const response = await YouTube.get('/search', {
      params: {
        q: value
      }
    })
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])

    for (const item in response.data.items) {
      console.log(response.data.items[item].snippet)
    }
  }

  useEffect(()=> {
    onValueSubmit('Happy')
  }, [])

    return (
      <div>
        <SearchBar onFormSubmit = { onValueSubmit }/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
               <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect = {(video)=> {setSelectedVideo(video)}} videos= {videos} />
            </div>
          </div>
        </div>
      </div>
    )
}

export default App;