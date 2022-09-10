import React from "react";
import SearchBar from "./SearchBar";
import YouTube from "../APIs/YouTube";
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {videos: [], selectedVideo: null}
  onValueSubmit = async value => {
    const response = await YouTube.get('/search', {
      params: {
        q: value
      }
    })
    this.setState({videos:response.data.items, selectedVideo: response.data.items[0]})
    for (const item in response.data.items) {
      console.log(response.data.items[item].snippet)
    }
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo:video})
    console.log(this.state.selectedVideo)
  }

  componentDidMount() {
    this.onValueSubmit('Happy')
  }

  render() {
    return (
      <div>
        <SearchBar onFormSubmit = { this.onValueSubmit }/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
               <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect = {this.onVideoSelect} videos= {this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;