
import {Table} from './Table'
import "./Content.css";
import { TeamDetails } from './TeamDetails/TeamDetails';
import { GetTeams } from "../GetTeams";
import {useState} from "react";
import {Team} from "../GraphQL/schema";


export function Content(){
    const teams = GetTeams();

    const [selectedTeam, setSelectedTeam] = useState<Team>(teams[0]);


    return (<div className="content">
        <Table teams={teams} setSelectedTeam={setSelectedTeam}/>
        <TeamDetails team={selectedTeam} setSelectedTeam={setSelectedTeam}/>
    </div>)
}