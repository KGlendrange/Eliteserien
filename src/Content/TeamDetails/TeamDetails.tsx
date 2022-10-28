import "./TeamDetails.css"
import {Team, Match} from "../../GraphQL/schema"
import { GetMatches } from "../../GetMatches";




interface TeamDetailsProps {
    team: Team,
    setSelectedTeam: (value: Team) => void;
}
export function TeamDetails({team, setSelectedTeam} : TeamDetailsProps){
    if(!team) return <></>;

    const matches : Match[] = GetMatches(team?.participant?.id);
    return (
        <div className="teamDetails">
            <div className="title">
                <img src={getLogo(team)} alt={`teamLogo-${team.participant.name}`}/>
                <h1>{team?.participant?.name.toUpperCase()}</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Dato
                        </th>
                        <th className="teamDetails-table__name">
                            Motstander
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(matches).map((match, index) => <Row selectedTeam={team} match={match} setSelectedTeam={setSelectedTeam}/>)}
                </tbody>
            </table>
        </div>
    )
}

interface RowProps {
    selectedTeam: Team,
    setSelectedTeam: (value: Team) => void;
    match: Match
}
function Row({selectedTeam, match, setSelectedTeam} : RowProps) {
    const opponent : Team  | undefined = match.participants.find((participant) => participant.participant.id !== selectedTeam.participant.id);
    return (<tr key={match.id}>
        <td>
            {match.startDate.split("T")[0]}
        </td>
        <td className="name" onClick={() => {
                if(opponent) {
                    setSelectedTeam(opponent)
                }
        }}>
            {opponent?.participant.name}
        </td>
    </tr>)
}


function getLogo(team : Team) {
    const path = removeNorwegianLetters(team.participant.name);
    console.log(path);
    const url = new URL(`../../assets/${path}.png`, import.meta.url);
    console.log(url);
    return url.href;
}

function removeNorwegianLetters(teamName: string){
    return teamName.toLowerCase().replace("å","aa").replace("ø","o").replace("fk ", "").replace("/","").split(" ")[0];
}

