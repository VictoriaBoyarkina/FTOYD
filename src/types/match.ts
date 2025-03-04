export type Player = {
  kills: number | string;
  username: string;
};

export type Match = {
  awayScore: number | string;
  awayTeam: {
    name: string;
    place: number | string;
    players: Player[] | null;
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
  status: string;
  time: string;
  title: string;
};
