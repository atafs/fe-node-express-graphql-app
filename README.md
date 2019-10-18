TO CONTINUE... 76. App Challenges

# Lyrical-GraphQL

Starter project from a GraphQL course on Udemy.com

## setup

This project is a react web app that is served by a node express graphQL API connect to noSQL mongoDB database. 

It handles content related with songs and lyrics. With the ability to add or delete a song. Add and like lyrics of songs.

In more detail:
- `server node graphQL`: is where we are modeling the songs and lyrics using mongoDB. We have the schema where we have graphQL type objects, queries and mutations to get and change data from the database.
- `mongoDB`: I am using mLab where I created a database so it hosted in a way that is more similar to a production environment instead of hosting it locally.
- `client react web app`: there is no redux layer in this project. To make the project look decent with minimal effort I am using material design (because that wasn't the focus of it). The connects to the server using a provider called Apollo...

Doc in Fuse internal: https://fuse.fuseuniversal.com/communities/3286/contents/195149

## links

#### client (two routes)

http://localhost:4000/#/
http://localhost:4000/#/song/new

#### graphQL

http://localhost:4000/graphql

#### mongoDB

https://mlab.com/databases/lyricaldb/
account: americotomaswork@gmail.com
username: atafs

## Deploy in Heroku

Login:

> heroku login

Create new project:

> heroku create

Change default domain:

> heroku apps:rename app-react-redux-supersquad

Check for the remote branchs

> git remote -v

Check logs

> heroku logs

Deploy code (when I am still in my branch):

> git push origin HEAD:master

> yarn install

> git push heroku master

## queries

#### query01 add a song

mutation {
addSong(title: "Cold Night") {
id
}
}

#### query02 add a lyric

```
mutation {
  addLyricToSong(songId: "5c5da0561f2a7e94900d6507", content: "Oh my oh my its a cold night") {
    songId
  }
}
```

#### query03 get the songs

```
{
  songs {
    id
    title
    lyrics {
      content
    }
  }
}
```

#### query04 get the title from each song

```
{
  songs {
    title
  }
}
```

#### query05 add a song

```
mutation {
  addSong(title: "Dog Call!!") {
    id
    title
  }
}
```

#### query06 adding a song using query variables

#### - query variable: { "title": "I am using the query variables" }

```
mutation AddSong($title: String) {
  addSong(title: $title) {
    id
    title
  }
}
```
