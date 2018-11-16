create table leagues (
  id serial primary key,
  name text
);

create table teams (
  id serial primary key,
  name text,
  leagueid integer references leagues (id)
);

create table users (
  id serial primary key,
  username varchar(200) unique not null,
  phash text unique not null,
  logo text,
  teamid integer references teams (id) -- Check if deleting team id will delete the team itself
);

create table records (
  wins integer,
  losses integer,
  teamrank integer,
  ts timestamp,
  teamid integer references teams (id)
);

create table points (
  currentpoints decimal,
  ts timestamp,
  teamid integer references teams (id)
);

create table players (
  id serial primary key,
  name text,
  position text,
  health boolean,
  teamid integer references teams (id)
);

create table stats (
  id serial primary key,
  name varchar(100),
  value decimal,
  statdate timestamp,
  playerid integer references players (id)
);

create table posts (

);
