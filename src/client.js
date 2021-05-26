import fetch from 'node-fetch';
import { encode } from 'base-64';

const client = mozaik => {

  return {

    message( id ) {
      return fetch('/messsage', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : {
          id : id
        }
      })
      .then(res => res.json)
    }
    
  }
}

export default client;