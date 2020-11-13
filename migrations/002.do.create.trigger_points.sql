CREATE TABLE trigger_points (
  id SERIAL PRIMARY KEY,
  -- user_id INTEGER REFERENCES users(id),
  image TEXT,
  title TEXT NOT NULL,
  content TEXT,
  date_created TIMESTAMPTZ DEFAULT now() NOT NULL
);