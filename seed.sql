insert into leagues
  (name)
values
  ('contestants for second place'),
  ('the loser league'),
  ('digitalcrafts');


insert into teams
  (name, leagueid)
values
  ('no skill just intangibles', 1),
  ('the dream team', 2),
  ('not your brady bunch', 3);


insert into users
  (username, phash, logo, teamid)
values
  ('alexrogers823', 'hehehaha', 'https://fake.com.jpg', 2),
  ('stardust', 'uhhuhhuhhuh', 'https://rudeaf.com.jpg', 1),
  ('dirtybilly', 'wtfilikedirt', 'https://dirt.com.jpg', 3);


insert into records
  (wins, losses, teamrank, ts, teamid)
values
  (4, 1, 2, '2018-04-05', 3),
  (1, 31, 3, '2018-07-05', 2),
  (22, 7, 1, '2018-09-23', 1);

insert into points
  (currentpoints, ts, teamid)
values
  (110, '2018-09-23', 2),
  (127.4, '2018-07-05', 3),
  (2.2, '2018-04-05', 1);


insert into players
  (name, position, health, teamid)
values
  ('Cam Newton', 'Quarterback', true, 2),
  ('Rob Gronkowski', 'Tight End', false, 1),
  ('Chad Ochocinco', 'Wide Receiver', true, 3),
  ('Terrell Owens', 'Wide Receiver', false, 1);

  insert into stats
    (name, value, statdate, playerid)
  values
    ('Rushing Yards', 113.2, '2018-03-04', 2),
    ('Passing Yards', 250.2, '2018-09-06', 1),
    ('Receiving Yards', 75, '2018-01-01', 3);
