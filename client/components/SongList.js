import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class SongList extends Component {
  renderSongs() {
    const { songs } = this.props.data

    return songs.map(song => {
      const { id, title } = song

      return <li key={id} className="collection-item">{title}</li>
    })
  }

  render() {
    console.log('this.props', this.props)
    const { loading } = this.props.data

    if (loading) return <div>Loading...</div>

    return <ul className="collection">{this.renderSongs()}</ul>
  }
}

// 1- identify data needed inside the component: { songs { title }}
// 2- write the query in graphQL
const query = gql`
  {
    songs {
      id
      title
    }
  }
`

export default graphql(query)(SongList)
