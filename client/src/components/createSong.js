import React, {
    Component
} from "react";
import axios from "axios";

export default class CreateSong extends Component {
    // ctor stores data
    constructor(props) {
        super(props);

        this.onChangeSongQueuePosition = this.onChangeSongQueuePosition.bind(this);
        this.onChangeSongName = this.onChangeSongName.bind(this);
        this.onChangeSongLength = this.onChangeSongLength.bind(this);
        this.onChangeSongURL = this.onChangeSongURL.bind(this);
        this.onChangeSongIcon = this.onChangeSongIcon.bind(this);
        this.onChangeArtistName = this.onChangeArtistName.bind(this);
        this.onChangeArtistAlbum = this.onChangeArtistAlbum.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            q_pos: 0,
            name: "",
            length: 0,
            url: "",
            icon: null,
            artist: {
                name: "",
                album: ""
            }
        };
    }

    // State property change handlers
    
    onChangeSongQueuePosition(e) {
        this.setState({
            q_pos: e.target.value,
        });
    }
    
    onChangeSongName(e) {
        this.setState({
            name: e.target.value,
        });
    }
    
    onChangeSongLength(e) {
        this.setState({
            length: e.target.value,
        });
    }
    
    onChangeSongURL(e) {
        this.setState({
            url: e.target.value,
        });
    }
    
    onChangeSongIcon(e) {
        this.setState({
            icon: e.target.value,
        });
    }
    
    onChangeArtistName(e) {
        this.setState({
            artist: {
                name: e.target.value,
            }
        });
    }
    
    onChangeArtistAlbum(e) {
        this.setState({
            artist: {
                album: e.target.value,
            }
        });
    }


    // Handle submission
    onSubmit(e) {
        e.preventDefault();

        // Post request sent to create URL -> Axios adds new song!
        const newSong = {
            q_pos: this.state.q_pos,
            name: this.state.name,
            length: this.state.length,
            url: this.state.url,
            icon: this.state.icon,
            artist: {
                name: this.state.artist.name,
                album: this.state.artist.album
            }
        };

        axios
            .post("http://localhost:5000/songs/add", newSong)
            .then((res) => console.log(res.data));

        // Empty the state after posting to DB.
        this.setState({
            q_pos: 0,
            name: "",
            length: 0,
            url: "",
            icon: null,
            artist: {
                name: "",
                album: ""
            }
        });

        window.location.reload(false);
    }

    // UI -- Form Code
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add New Song</h3>
                <form onSubmit={this.onSubmit}>
                    {/*
                    <div className="form-group">
                        <label>Position in Queue: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q_pos}
                            onChange={this.onChangeSongQueuePosition}
                        />
                    </div>
                    */}
                    <div className="form-group">
                        <label>Song Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeSongName}
                        />
                    </div>
                    {/*
                    <div className="form-group">
                        <label>Song Length (in seconds): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.length}
                            onChange={this.onChangeSongLength}
                        />
                    </div>
                    */}
                    <div className="form-group">
                        <label>Song URL (link from Spotify, YouTube, etc.): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.url}
                            onChange={this.onChangeSongURL}
                        />
                    </div>
                    {/*
                    <div className="form-group">
                        <label>Song Icon URL: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.icon}
                            onChange={this.onChangeSongIcon}
                        />
                    </div>
                    */}
                    <div className="form-group">
                        <label>Artist Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.artist.name}
                            onChange={this.onChangeArtistName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Artist Album: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.artist.album}
                            onChange={this.onChangeArtistAlbum}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Add New Song"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}