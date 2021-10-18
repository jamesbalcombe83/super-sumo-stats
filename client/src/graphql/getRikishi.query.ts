
import gql from 'graphql-tag';

export default gql`
  query allRikishis {
    allRikishis {
    nodes {
      ringName
      highestRank
      dateOfBirth
      birthPlace
    }
    }
}
`