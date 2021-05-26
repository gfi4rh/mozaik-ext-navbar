import fetch from 'node-fetch';
import { encode } from 'base-64';

const client = mozaik => {

  return {

    message( params ) {
      return fetch(`/messsage/${params.id}`, {
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      .then(res => res.json)
    },
  }
}

export default client;