import { Match } from "../types/match";
import { DEFAULT_SUBSTITUTE } from "../utils/constants";
import { createTranformer, isObject } from "../utils/helpers";

const { toString, toNumber } = createTranformer(DEFAULT_SUBSTITUTE);

const toMatches = (response: unknown): Match[] | null => {
  if (
    !isObject(response) ||
    !isObject(response.data) ||
    !Array.isArray(response.data.matches)
  ) {
    return null;
  }

  return response.data.matches.map((match: any) => {
    return {
      awayScore: toNumber(match?.awayScore),
      awayTeam: {
        name: toString(match?.awayTeam?.name),
        place: toNumber(match?.awayTeam?.place),
        players: Array.isArray(match?.awayTeam?.players)
          ? match?.awayTeam?.players.map((player: any) => ({
              kills: toNumber(player?.kills),
              username: toString(player?.username),
            }))
          : null,
        points: toNumber(match?.points),
        totalKills: toNumber(match?.total_kills),
      },
      homeScore: toNumber(match?.homeScore),
      homeTeam: {
        name: toString(match?.homeTeam?.name),
        place: toNumber(match?.homeTeam?.place),
        players: Array.isArray(match?.homeTeam?.players)
          ? match?.homeTeam?.players.map((player: any) => ({
              kills: toNumber(player?.kills),
              username: toString(player?.username),
            }))
          : null,
        points: toNumber(match?.homeTeam?.points),
        totalKills: toNumber(match?.homeTeam?.total_kills),
      },
      status: toString(match?.status),
      time: toString(match?.time),
      title: toString(match?.title),
    };
  });
};

export { toMatches };
