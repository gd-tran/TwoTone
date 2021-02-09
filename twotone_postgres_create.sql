
drop table submissions CASCADE;

CREATE TABLE submissions1 (
    "recording_id" serial NOT NULL,
    "user_attribution" varchar,
    "time_stamp" varchar NOT NULL,
    "location" varchar NOT NULL,
    "blob" varchar NOT NULL,
    "hash" varchar NOT NULL
) WITH (
    OIDS=FALSE
);
