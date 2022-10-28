
import "./Table.css";
import {useState} from "react";
import {Team} from "../GraphQL/schema";


const LONG_INITIALS = ["SPILT","VUNNET","UAVGJORT","TAP","+/-","POENG"];
const SHORT_INITIALS = ["GP","W","D","L","GD","PTS"];


interface TableProps {
    teams: Team[],
    setSelectedTeam: (value: Team) => void;
}
export function Table({teams, setSelectedTeam} : TableProps){
    const [shortInitials, setShortInitials] = useState(true);

    return (
        <div className="league">
            <button className="toggleInitials" onClick={() => setShortInitials(prevState => !prevState)}>
                Click me
            </button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th></th>
                        <th>{getHeaderName(0, shortInitials)}</th>
                        <th>{getHeaderName(1, shortInitials)}</th>
                        <th>{getHeaderName(2, shortInitials)}</th>
                        <th>{getHeaderName(3, shortInitials)}</th>
                        <th>{getHeaderName(4, shortInitials)}</th>
                        <th>{getHeaderName(5, shortInitials)}</th>
                    </tr>
                </thead>
                <tbody>
                {Object.values(teams).map((team) => <Row team={team} setSelectedTeam={setSelectedTeam}/>)}
                </tbody>
               
            </table>
        </div>
    )
}

function getHeaderName(index: number, shortInitials : boolean){
    return shortInitials ? SHORT_INITIALS[index] : LONG_INITIALS[index];
}

interface RowProps {
    team: Team,
    setSelectedTeam: (value: Team) => void;
}
function Row({team, setSelectedTeam} : RowProps) {
    const data = team.data;
    console.log("key:", team);
    return (
        <tr key={team.participant.id} onClick={() => setSelectedTeam(team)}>
            <td>
                {team.rank}
            </td>
            <td className="name">
                {team.participant.name}
            </td>
            <td>
                {getValueFromKeyCode(data, "played")}
            </td>
            <td>
                {getValueFromKeyCode(data, "wins")}
            </td>
            <td>
                {getValueFromKeyCode(data, "draws")}
            </td>
            <td>
                {getValueFromKeyCode(data, "defeits")}
            </td>
            <td>
                {getValueFromKeyCode(data, "goalsfor") - getValueFromKeyCode(data, "goalsagainst")}
            </td>
            <td>
                {getValueFromKeyCode(data, "points")}
            </td>
        </tr>)
        
    
}

function getValueFromKeyCode(arr: any, keyCode: string){
    
    return arr.find((item : any) => item.code === keyCode).value;
}