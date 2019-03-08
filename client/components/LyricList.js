import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import likeLyric from '../queries/likeLyric'

class LyricList extends Component {
  onLike(id, likes) {
    console.log('id', id)

    const { mutate } = this.props
    mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    })
  }

  renderLyrics() {
    const { lyrics } = this.props

    return lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <div className="vote-box-votes-number">{likes}</div>
            <i
              className="material-icons"
              onClick={() => this.onLike(id, likes)}
            >
              thumb_up
            </i>
          </div>
        </li>
      )
    })
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>
  }
}

export default graphql(likeLyric)(LyricList)
