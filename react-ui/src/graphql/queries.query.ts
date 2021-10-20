
import gql from 'graphql-tag'

export default gql`
    query getAllRikishi {
        allRikishis {
            edges {
                node {
                    weight
                    ringName
                    retirementBasho
                    realName
                    openingBasho
                    id
                    highestRank
                    heya
                    height
                    birthPlace
                }
            }
        }
    }

    query getARikishi($id : Int!) {
        rikishiById(id: $id) {
            birthPlace
            dateOfBirth
            height
            heya
            highestRank
            id
            openingBasho
            realName
            retirementBasho
            ringName
            weight
        }
}
`