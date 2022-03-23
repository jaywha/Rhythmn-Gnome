import { Component } from "react";

export default class spotifyLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { user: "", pass: "" };
    }

    render() {
        return (            
            <div>
                <div id="login" style="display:none">
                <h1>First, log in to spotify</h1>
                <a href="https://api.spotify.com/authorize">Log in</a>
                </div>
                <div id="loggedin" style="display:none">
                </div>
                <script id="loggedin-template" type="text/x-handlebars-template">
                <h1>Logged in as </h1>
                <img id="avatar" width="200" src="" />
                <dl>
                <dt>Display name</dt><dd></dd>
                <dt>Username</dt><dd></dd>
                <dt>Email</dt><dd></dd>
                <dt>Spotify URI</dt><dd><a href=""></a></dd>
                <dt>Link</dt><dd><a href=""></a></dd>
                <dt>Profile Image</dt><dd></dd>
                </dl>
                <p><a href="/">Log in again</a></p>
            </script>
            </div>
        );
    }
}