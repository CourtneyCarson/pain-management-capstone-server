CREATE TABLE trigger_points_user (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  trigger_points_id INTEGER REFERENCES trigger_points(id)
);