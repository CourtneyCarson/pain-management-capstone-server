BEGIN;

TRUNCATE
  users,
  notes,
  results;
  

INSERT INTO users (user_name, full_name, password)
VALUES
  ('emmie', 'em mie', 'password'),
  ('yahoo', 'ya hoo', 'password'),
  ('cashmew', 'cash mewtilator', 'password');


INSERT INTO results (title, image, content) -- add user id? 
VALUES
  ('Hand-Painted Rubber Ducky', 'https://loremflickr.com/750/300/landscape?random=1',  'This ducky has been hand-painted and is now art. Therefore it is useless and cannot be put in water.'),
  ('Cloning Machine', 'https://loremflickr.com/750/300/landscape?random=2',  '100% guaranteed to occasionally work every time! Requires a 167.23v power outlet or a dragonscale battery (obtained separately by solving a riddle).'),
  ('Kangaroo Carrier', 'https://loremflickr.com/750/300/landscape?random=3',  'This convenient item can assist you in bringing your kangaroo to your favorite grocery store, or as a conversation starter at a first date or funeral.'),
  ('Love Potion #26', 'https://loremflickr.com/750/300/landscape?random=4', 'While not as well known as its predecessor, Love Potion #9, this formulation has been proven to be effective in winning the affections of some small amphibians.'),
  ('My Freeze Ray', 'https://loremflickr.com/750/300/landscape?random=5',  'With this freeze ray, you can stop the world.'),
  ('Personal EMP Generator', 'https://loremflickr.com/750/300/landscape?random=6',  'With its guaranteed 10m radius, this discreet device will disable an entire busload of iPhones with the push of a button. It is recommended to include an analog camera which can record the entertaining looks on the faces of those affected, as well as a riot shield in case of mass hysteria.'),
  ('Foolproof Instant Wealth Pamphlet', 'https://loremflickr.com/750/300/landscape?random=7', 'Purchase this pamphlet for $100. Sell this pamphlet to a billion people for $100. Acquisition of this pamphlet is indeed proof of foolishness!'),
  ('Story Water Spigot', 'https://loremflickr.com/750/300/landscape?random=8',  'Once installed by a qualified leprechaun, this spigot will produce a steady stream of stories which can be later be adapted to motion pictures which will not be quite as good as the originals.'),
  ('Ruby Red Slippers', 'https://loremflickr.com/750/300/landscape?random=9',  'Get home quicker than either Uber or Lyft! Three taps of the heels is all it takes. One size fits all.'),
  ( 'Magic Lamp', 'https://loremflickr.com/750/300/landscape?random=10', 'May or may not produce a genie.');

INSERT INTO notes(content,  title) 
VALUES
  ('These are notes', 'title');
  

COMMIT;
