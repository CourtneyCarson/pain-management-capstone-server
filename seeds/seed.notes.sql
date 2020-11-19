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
  (1,'Sub Occipitals', 'https://live.staticflickr.com/65535/50607295132_069ed53912_w.jpg', 'Suboccipital trigger points cause pain that feels like it’s inside the head, extending from the back of the head to the eye and forehead (figure 4.33). It feels like the whole side of the head hurts. This sensation is typical of what you experience with a migraine headache (Simons, Travell, and Simons 1999). The upper three suboccipitals on each side control nodding and tilting and, if afflicted with trigger points, can limit these movements and cause a stiff neck.'),
  (2,'Masseter', 'https://live.staticflickr.com/65535/50609334733_f84e48a3dd_w.jpg',  'The masseter (MASS-uh-ter) muscles are the power muscles of the jaw, exerting the major force in biting and chewing. In the mirror, you can see your masseters contract right in front of your earlobes when you grit your teeth.'),
  (3,'Levator Scapulae', 'https://live.staticflickr.com/65535/50618496292_6a3291163a_w.jpg',  'trigger point occurs next to the inner border of the shoulder blade in the broad middle part of the trapezius. It causes a burning kind of pain nearby, alongside the spine..'),
  (3,'Trapezius', 'https://live.staticflickr.com/65535/50609334693_18586bc1d3_w.jpg',  'trigger point occurs next to the inner border of the shoulder blade in the broad middle part of the trapezius. It causes a burning kind of pain nearby, alongside the spine..'),
  (6,'Iliocostalis', 'https://live.staticflickr.com/65535/50617729193_978e9c037f_w.jpg',  'Iliocostalis Trigger Point Information'),
  (6,'Gluteus Medius', 'https://live.staticflickr.com/65535/50609334848_d39aa30c4e_w.jpg',  'Iliocostalis Trigger Point Information'),
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
