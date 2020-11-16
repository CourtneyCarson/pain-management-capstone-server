BEGIN;

TRUNCATE
  trigger_points_user,
  users,
  trigger_points,
  notes
 

  RESTART IDENTITY;
  

INSERT INTO users (id,email, password)
VALUES
  (1,'emmie@aol.com', '$2a$12$puiYyy7dAMOBuL.vMwp8kephkPWl8puUkGaY40JYvJHNClFWLnZ2G'),
  (2,'yahoo@yahoo.com', '$2a$12$puiYyy7dAMOBuL.vMwp8kephkPWl8puUkGaY40JYvJHNClFWLnZ2G'),
  (3,'cashmew@gmail.com', '$2a$12$puiYyy7dAMOBuL.vMwp8kephkPWl8puUkGaY40JYvJHNClFWLnZ2G');


INSERT INTO trigger_points (id, title,  image, content) -- add user id? 
VALUES
  (1,'Hand-Painted Rubber Ducky',  'https://loremflickr.com/750/300/landscape?random=1',  'This ducky has been hand-painted and is now art. Therefore it is useless and cannot be put in water.'),
  (2,'Cloning Machine', 'https://loremflickr.com/750/300/landscape?random=2',  '100% guaranteed to occasionally work every time! Requires a 167.23v power outlet or a dragonscale battery (obtained separately by solving a riddle).'),
  (3,'Kangaroo Carrier', 'https://loremflickr.com/750/300/landscape?random=3',  'This convenient item can assist you in bringing your kangaroo to your favorite grocery store, or as a conversation starter at a first date or funeral.'),
  (4,'Love Potion #26', 'https://loremflickr.com/750/300/landscape?random=4', 'While not as well known as its predecessor, Love Potion #9, this formulation has been proven to be effective in winning the affections of some small amphibians.'),
  (5,'My Freeze Ray', 'https://loremflickr.com/750/300/landscape?random=5',  'With this freeze ray, you can stop the world.'),
  (6,'Iliocostalis', 'https://live.staticflickr.com/65535/50607161446_e2d9f7e29e_w.jpg',  'Iliocostalis Trigger Point Information'),
  (7,'Foolproof Instant Wealth Pamphlet', 'https://loremflickr.com/750/300/landscape?random=7', 'Purchase this pamphlet for $100. Sell this pamphlet to a billion people for $100. Acquisition of this pamphlet is indeed proof of foolishness!'),
  (8,'Story Water Spigot', 'https://loremflickr.com/750/300/landscape?random=8',  'Once installed by a qualified leprechaun, this spigot will produce a steady stream of stories which can be later be adapted to motion pictures which will not be quite as good as the originals.'),
  (9,'Levator Scapulae', 'https://live.staticflickr.com/65535/50607179306_53fb46e9f7_w.jpg',  'Levator Scapulae Trigger Point Information'),
  (10,'Sub Occipitals', 'https://live.staticflickr.com/65535/50607295132_baa7e594a2_w.jpg', 'Sub Occipital Trigger Point Information');

INSERT INTO notes(content, title, trigger_point_id) 
VALUES
  ('These are notes', 'title', 1 );
  

INSERT INTO trigger_points_user (id, user_id, trigger_points_id)
VALUES
(1,3,10),
(2,3,9),
(3,3,6);


COMMIT;
