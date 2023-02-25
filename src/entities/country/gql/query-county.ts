import { gql } from "@apollo/client";

export const QueryCounty = gql`
  query countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      native
      capital
      emoji
      currency
      phone
      languages {
        code
        name
      }
    }
  }
`;
