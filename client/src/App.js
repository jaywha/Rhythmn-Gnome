import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import SongList from "./components/songList";
import CreateSong from "./components/createSong";

/*var client_id = 'f7515d1c7f544555bec882641b24e39a'; // Your client id
var client_secret = 'a7d3b05ea34446e6b2ef9acb49821e0f'; // Your secret
var redirect_uri = 'http://192.168.0.173:3000/'; // Your redirect uri
var scopes = "'user-read-private user-read-email'";*/

const App = () => {
  return (
    <div>
      <Navbar />

      <Route exact path="/">
        <SongList />
      </Route>
      <Route path="/createSong">
          <CreateSong />
      </Route>
    </div>
  );
};

export default App;