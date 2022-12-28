SELECT w.winner, w.wins, l.loser, l.losses, (w.wins * 100.0 / (w.wins + l.losses)) as win_rate
FROM (SELECT winner, COUNT(*) as wins FROM votes GROUP BY winner) w
FULL JOIN (SELECT loser, COUNT(*) as losses FROM votes GROUP BY loser) l
  ON w.winner = l.loser;
