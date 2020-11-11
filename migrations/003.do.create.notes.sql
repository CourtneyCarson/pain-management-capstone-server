CREATE TABLE notes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    trigger_point_id INTEGER REFERENCES trigger_points(id),
    title TEXT NOT NULL,
    content TEXT,
    date_created TIMESTAMPTZ DEFAULT now() NOT NULL
);