import AppHeader from '@crema/core/AppLayout/DefaultLayout/AppHeader';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import React from 'react';
import {gql, useQuery} from '@apollo/client';

function index() {
  const GET_DATA = gql`
    query Users {
      Users {
        name
        f_name
      }
    }
  `;
  // const GET_DATA2 = gql`
  //   query Post {
  //     posts {
  //       data {
  //         id
  //         attributes {
  //           postname
  //         }
  //       }
  //     }
  //   }
  // `;

  // const {loading, error, data} = useQuery(GET_DATA, {
  //   context: {apiName: 'strapi'},
  //   fetchPolicy: 'network-only', // Used for first execution
  //   nextFetchPolicy: 'cache-first', // Used for subsequent executions
  // });

  const {loading, error, data} = useQuery(GET_DATA);

  console.log(data);

  return <AppsHeader> {data?.posts?.data[0].id}</AppsHeader>;
}

export default index;
