export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			votes: {
				Row: {
					created_at: string | null;
					id: string;
					loser: string;
					user_id: string | null;
					winner: string;
				};
				Insert: {
					created_at?: string | null;
					id: string;
					loser: string;
					user_id?: string | null;
					winner: string;
				};
				Update: {
					created_at?: string | null;
					id?: string;
					loser?: string;
					user_id?: string | null;
					winner?: string;
				};
			};
		};
		Views: {
			leaderboard: {
				Row: {
					college: string | null;
					losses: number | null;
					total: number | null;
					win_rate: number | null;
					wins: number | null;
				};
			};
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
