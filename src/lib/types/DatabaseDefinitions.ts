export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			votes: {
				Row: {
					id: string;
					created_at: string | null;
					winner: string;
					loser: string;
					user_id: string | null;
				};
				Insert: {
					id: string;
					created_at?: string | null;
					winner: string;
					loser: string;
					user_id?: string | null;
				};
				Update: {
					id?: string;
					created_at?: string | null;
					winner?: string;
					loser?: string;
					user_id?: string | null;
				};
			};
		};
		Views: {
			leaderboard: {
				Row: {
					college: string | null;
					wins: number | null;
					losses: number | null;
					win_rate: number | null;
				};
			};
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
	};
}
