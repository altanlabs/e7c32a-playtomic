export interface Player {
  id: string;
  name: string;
  avatar: string;
  position: string;
  level: string;
}

export interface TeamStats {
  wins: number;
  losses: number;
  tournamentsPlayed: number;
  tournamentsWon: number;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  description: string;
  level: string;
  players: Player[];
  captain: Player;
  stats: TeamStats;
  maxPlayers: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}