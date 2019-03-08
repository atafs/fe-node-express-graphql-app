import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import queryToFetchSongs from '../queries/fetchSongs'
import queryToDeleteSong from '../queries/deleteSong'

class SongList extends Component {
  onSongDelete(id) {
    const {
      mutate,
      data: { refetch }
    } = this.props

    mutate({ variables: { id } }).then(() => refetch())
  }

  renderSongs() {
    const { songs } = this.props.data

    return songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>{title}</Link>
          <i className="material-icons" onClick={() => this.onSongDelete(id)}>
            delete
          </i>
        </li>
      )
    })
  }

  render() {
    console.log('this.props', this.props)
    const { loading } = this.props.data

    if (loading) return <div>Loading...</div>

    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

export default graphql(queryToDeleteSong)(graphql(queryToFetchSongs)(SongList))
