BEGIN;

TRUNCATE
  users,
  notes,
  trigger_points;
  

INSERT INTO users (id,user_name, full_name, password)
VALUES
  (1,'emmie', 'em mie', 'password'),
  (2,'yahoo', 'ya hoo', 'password'),
  (3,'cashmew', 'cash mewtilator', 'password');


INSERT INTO trigger_points (id, title, user_id, image, content) -- add user id? 
VALUES
  (1,'Hand-Painted Rubber Ducky', 1, 'https://loremflickr.com/750/300/landscape?random=1',  'This ducky has been hand-painted and is now art. Therefore it is useless and cannot be put in water.'),
  (2,'Cloning Machine',2, 'https://loremflickr.com/750/300/landscape?random=2',  '100% guaranteed to occasionally work every time! Requires a 167.23v power outlet or a dragonscale battery (obtained separately by solving a riddle).'),
  (3,'Kangaroo Carrier',3, 'https://loremflickr.com/750/300/landscape?random=3',  'This convenient item can assist you in bringing your kangaroo to your favorite grocery store, or as a conversation starter at a first date or funeral.'),
  (4,'Love Potion #26',1, 'https://loremflickr.com/750/300/landscape?random=4', 'While not as well known as its predecessor, Love Potion #9, this formulation has been proven to be effective in winning the affections of some small amphibians.'),
  (5,'My Freeze Ray',2, 'https://loremflickr.com/750/300/landscape?random=5',  'With this freeze ray, you can stop the world.'),
  (6,'Personal EMP Generator', 3,'https://loremflickr.com/750/300/landscape?random=6',  'With its guaranteed 10m radius, this discreet device will disable an entire busload of iPhones with the push of a button. It is recommended to include an analog camera which can record the entertaining looks on the faces of those affected, as well as a riot shield in case of mass hysteria.'),
  (7,'Foolproof Instant Wealth Pamphlet', 1,'https://loremflickr.com/750/300/landscape?random=7', 'Purchase this pamphlet for $100. Sell this pamphlet to a billion people for $100. Acquisition of this pamphlet is indeed proof of foolishness!'),
  (8,'Story Water Spigot',2, 'https://loremflickr.com/750/300/landscape?random=8',  'Once installed by a qualified leprechaun, this spigot will produce a steady stream of stories which can be later be adapted to motion pictures which will not be quite as good as the originals.'),
  (9,'Ruby Red Slippers',3, 'https://loremflickr.com/750/300/landscape?random=9',  'Get home quicker than either Uber or Lyft! Three taps of the heels is all it takes. One size fits all.'),
  (10, 'Magic Lamp',1, 'https://loremflickr.com/750/300/landscape?random=10', 'May or may not produce a genie.');

INSERT INTO notes(content,  title, trigger_point_id) 
VALUES
  ('These are notes', 'title', 1);
  

COMMIT;
