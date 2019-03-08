import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import fetchSongDetail from '../queries/fetchSongDetail'
import LyricCreate from './LyricCreate'
import LyricList  from './LyricList'

class SongDetail extends Component {
  render() {
    const { song } = this.props.data

    if (!song) return <div>Loading...</div>

    const { params } = this.props
    console.log('params', params)

    const { id, title, lyrics } = song
    console.log('song', song)

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{title}</h3>
        <LyricList lyrics={lyrics} />
        <LyricCreate songId={params.id} />
      </div>
    )
  }
}

export default graphql(fetchSongDetail, {
  options: props => {
    return { variables: { id: props.params.id } }
  }
})(SongDetail)
