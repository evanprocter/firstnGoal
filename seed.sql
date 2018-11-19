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

  insert into blogs
    (title, body, blogtime, userid)
  values
    ('Football', 'I love football so much. It is so super cool', '2018-11-02', 1),
    ('Sports', 'I love sport so much. It is so super awesome', '2017-06-02', 2),
    ('Touchdown', 'I love touchdowns so much. It is so super great', '2018-03-07', 3),
    ('Fumbles', 'I love fumbles so much. It isso super cool it is awesome', '2018-11-09', 2),
    ('Interception', 'I love interceptions so much. It is the best', '2018-02-06', 1);

  insert into comments
    (comment, posttime, userid)
  values
    ('They rock', '2018-09-03', 1),
    ('They suck', '2018-06-02', 2),
    ('They are awesome', '2018-01-01', 3),
    ('I do not like the quarterback', '2018-06-08', 2),
    ('He is a great footbalkl palyer', '2018-02-02', 1);


