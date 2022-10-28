
export type Team = {
    participant: TeamInfo;
    rank: number;
    data: [TeamData]
}

type TeamData = {
    code: string;
    value: string;
}

type TeamInfo = {
    id: string;
    name: string;
}


export type Match = {
    id: string;
    startDate: string;
    tournamentStage: {
        name: string;
    }
    participants: Team[]
}
