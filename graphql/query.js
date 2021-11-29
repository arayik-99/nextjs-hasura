import { gql } from '@apollo/client';

export const GET_JSON_DATA = gql`
  query JsonDataQuery($tail: String) {
    long_tails(where: { tail: { _eq: $tail } }) {
      json_id
    }
  }
`;
