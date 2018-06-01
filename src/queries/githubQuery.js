import { gql } from 'apollo-boost'

export const GITHUB_QUERY = gql`
query { 
	repository(name: "react", owner: "facebook"){
		commitComments(last: 10) {
		  edges {
		    node {
          commit {
            messageHeadline
            committedDate
            author {
              name
            }
          }
		    }
		  }
		}
  }
}
`