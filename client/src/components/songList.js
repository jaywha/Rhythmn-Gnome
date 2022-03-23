import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Song = (props) => (
    <tr>
        <td>{props.song.name}</td>
        <td>{props.song.artist.name}</td>
        <td>
            <Link to={{ pathname: props.song.url}} target="_blank">Listen Here!</Link>
        </td>
    </tr>
);

export default class SongList extends Component {
    constructor(props) {
        super(props);
        this.state = { songs: [] };
    }

    // Get data from DB
    componentDidMount() {
        axios
            .get("http://localhost:5000/songs/")
            .then((response) => {
                this.setState({ songs: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Map songs to table
    songList() {
        return this.state.songs.map((currentSong) => {
            return (
                <Song
                    song={currentSong}
                    key={currentSong._id}
                />
            );
        });
    }

    // Display table with song list
    render() {
        return (
            <div>
                <h3>Song List</h3>
                <table className="table table-striped" style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Song Name</th>
                            <th>Artist Name</th>
                            <th>Song Link</th>
                        </tr>
                    </thead>
                    <tbody>{this.songList()}</tbody>
                </table>
            </div>
        );
    }
}