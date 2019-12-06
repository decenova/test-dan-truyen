import { gql } from 'apollo-boost';

const GAME = gql`
  query Games($page: Int!, $order: GameOrderType!) {
    gamesByOrder(page: $page, order: $order) {
      entries {
        id
        name
        slug
        thumbnailUrl
        narrator {
          id
          username
          displayName
          __typename
        }
        __typename
      }
      pageNumber
      pageSize
      totalEntries
      totalPages
      __typename
    }
  }
`;

export default GAME;
export {
  GAME
}
