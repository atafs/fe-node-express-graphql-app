import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import addLyricsToSong from '../queries/addLyricsToSong'

class LyricCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: ''
    }
  }

  onSubmit(event) {
    event.preventDefault()

    const { content } = this.state
    const { mutate, songId } = this.props

    mutate({
      variables: {
        content,
        songId
      }
    }).then(() => this.setState({ content: '' }))
  }

  render() {
    const { content } = this.state
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          value={content}
          onChange={event => this.setState({ content: event.target.value })}
        />
      </form>
    )
  }
}

export default graphql(addLyricsToSong)(LyricCreate)
