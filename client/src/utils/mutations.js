import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String, $email: String, $password: String) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`

export const LOGIN = gql`
mutation login($email: String, $password: String) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`

export const SAVE_BOOK = gql`
mutation saveBook($bookBannana: Sb) {
  saveBook(bookBannana: $bookBannana) {
    _id
    bookCount
    email
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
    username
  }
}
`

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID) {
  removeBook(bookId: $bookId) {
    _id
    bookCount
    email
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
    username
  }
}
`

