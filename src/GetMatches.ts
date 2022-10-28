import { useState} from "react";
import {useQuery} from "@apollo/client";
import { useEffect } from "react";
import {LOAD_MATCHES} from "./GraphQL/Queries";
import {Match} from "./GraphQL/schema";

export function GetMatches(teamId : string) {
     const [matches, setMatches] = useState<Match[]>([]);
     const {data, loading, error} = useQuery(LOAD_MATCHES, {
         variables: {
             "participantId": teamId,
             "fromDate": "2022-04-03",
             "toDate": "2022-11-13"
         }
     });
    useEffect(() => {
         if(data){
            const allMatches : Match[] = data.eventsByParticipantAndDateRange;
            const onlyEliteserien : Match[] = Object.values(allMatches).filter((match : any) => match.tournamentStage.name === "Eliteserien");
            setMatches(onlyEliteserien)
         }
     }, [data]);
     return matches;
}