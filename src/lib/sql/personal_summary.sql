CREATE
OR REPLACE PROCEDURE get_college_stats (IN p_user_id UUID) LANGUAGE SQL AS $$
SELECT
	COALESCE(w.winner, l.loser) AS college,
	COALESCE(w.wins, 0) AS wins,
	COALESCE(l.losses, 0) AS losses,
	(COALESCE(w.wins, 0) + COALESCE(l.losses, 0)) AS total,
	(
		COALESCE(w.wins, 0) * 100.0 / (COALESCE(w.wins, 0) + COALESCE(l.losses, 0))
	) AS win_rate
FROM
	(
		SELECT
			winner,
			COUNT(*) AS wins
		FROM
			votes
		WHERE
			user_id = p_user_id
		GROUP BY
			winner
	) w FULL
	JOIN (
		SELECT
			loser,
			COUNT(*) AS losses
		FROM
			votes
		WHERE
			user_id = p_user_id
		GROUP BY
			loser
	) l ON w.winner = l.loser
ORDER BY
	win_rate DESC;

$$;