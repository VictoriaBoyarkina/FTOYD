type Player = {
  kills: number | string;
  username: string;
};

enum MatchStatus {
  SCHEDULED = "Scheduled",
  ONGOING = "Ongoing",
  FINISHED = "Finished",
}

type Match = {
  awayScore: number | string;
  awayTeam: {
    name: string;
    place: number | string;
    players: Player[] | null;
    points: number | string;
    totalKills: number | string;
  };
  homeScore: number | string;
  homeTeam: {
    name: string;
    place: number | string;
    players: Player[] | null;
    points: number | string;
    totalKills: number | string;
  };
  status: MatchStatus;
  time: string;
  title: string;
};

export type { Match };
export { MatchStatus };
