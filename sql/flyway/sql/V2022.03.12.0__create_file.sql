

SET ROLE 'ts_app_app_dba';

create table app.film (
    id uuid primary key,
    name varchar not null,
    year int not  null,
    release timestamp not null,
    country varchar not null,
    "language" varchar,
    rating float not null
)