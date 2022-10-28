
import {gql} from "@apollo/client";


export const LOAD_TEAMS = gql`
  query table($tournamentStageId: ID!) {
    tournamentStage(id: $tournamentStageId) {
        id
        name
        standings(type: LEAGUE_TABLE) {
            participants {
                participant {
                    id
                    name
                }
                rank
                data {
                    code
                    value
                }
            }
        }
    }
}
`;

export const LOAD_MATCHES = gql`
    query teamMatches($participantId: ID!, $fromDate: LocalDate!, $toDate: LocalDate!) {
        eventsByParticipantAndDateRange(participantId: $participantId, fromDate: $fromDate, toDate: $toDate) {
            id
            startDate
            tournamentStage {
                name
            }
            participants {
                participant {
                    id
                    name
                }
            }
        }
}
`





