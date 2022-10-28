import { useState} from "react";
import {useQuery} from "@apollo/client";
import { useEffect } from "react";
import {LOAD_TEAMS} from "./GraphQL/Queries";
import {Team} from "./GraphQL/schema";

export function GetTeams() {
     const [teams, setTeams] = useState<Team[]>([]);
     const {data, loading, error} = useQuery(LOAD_TEAMS, {
         variables: {
             "tournamentStageId": "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83"
         }
     });
    useEffect(() => {
         if(data){
             setTeams(data.tournamentStage.standings[0].participants)
         }
     }, [data]);
     return teams;
}