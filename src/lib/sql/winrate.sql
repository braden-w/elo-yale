SELECT COALESCE(w.winner, l.loser) as college, COALESCE(w.wins, 0) as wins, COALESCE(l.losses, 0) as losses, (w.wins * 100.0 / (w.wins + l.losses)) as win_rate
FROM (SELECT winner, COUNT(*) as wins FROM votes GROUP BY winner) w
FULL JOIN (SELECT loser, COUNT(*) as losses FROM votes GROUP BY loser) l
  ON w.winner = l.loser;
