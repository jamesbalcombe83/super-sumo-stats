
import gql from 'graphql-tag'

export default gql`
    query getRikishi {
        allRikishis {
            edges {
                node {
                    ringName
                    highestRank
                    dateOfBirth
                    birthPlace
                }
            }
        }
    }
`