
import gql from 'graphql-tag'

export default gql`
    query getRikishi {
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