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
  (1,'Sub Occipitals', 'https://live.staticflickr.com/65535/50607295132_069ed53912_w.jpg', ' Sub Occipital Trigger Points cause pain that feels like it’s inside the head, extending from the back of the head to the forehead and eye. It feels like the whole side of the head hurts. This is a sensation typical of a migraine headache. It can cause nodding and tilting of the head to be limited. To find the Sub Occipitals find the bottom of the back of the skull, tilt your head slightly and work gently. You must exercise caution while working on muscles near the base of the skull, do not use a tool and use light touch. '),
  (2,'Masseter', 'https://live.staticflickr.com/65535/50609334733_f84e48a3dd_w.jpg',  'Trigger Points in the Masseter cause pain the front of the face, under eyes, over eyebrows, in both upper and lower teeth, and can even restrict opening of the jaw.  To find the Masster, place your thumb in your mouth and place your fingers on your cheek, clench your teeth and you will feel the Masseter contract. You can either pinch in this manner to massage this trigger point, or you can press into the same area on the outside of you check with supported fingertips. '),
  (3,'Levator Scapulae', 'https://live.staticflickr.com/65535/50618496292_6a3291163a_w.jpg',  'Trigger Points in Levator Scapulae muscles cause stiffness and pain in the upper back. It can keep you from turning your head to look behind you, especially when turning your head to the same side. To find Levator Scapulae, place the heel of your hand on your opposite collarbone allowing the fingers to lie across the shoulder. Don’t let this hand move while you swing your free arm forward and back. You will feel the angle of the shoulder blade move under your fingertips.'),
  (4,'Trapezius', 'https://live.staticflickr.com/65535/50609334693_18586bc1d3_w.jpg',  'Trapezius Trigger Point causes burning pain along the spine. It is found along the border of the shoulder blade in the middle area of the Trapezius.To make the trapezius easier to find, put your hand into your pocket and tilt your head to the same side as you will be working on. Then reach across with your opposite hand while resting your elbow on a table to support it. '),
  (5,'Iliocostalis', 'https://live.staticflickr.com/65535/50617729193_978e9c037f_w.jpg',  'Trigger Points in the Iliocostalis cause tightening of the superficial spinal muscles, with a referral pattern commonly felt in the lower back and hip. The pain felt is more of a diffused pain. To best work the Iliocostalis trigger points use a tennis ball, place the ball over your shoulder on your upper back, while leaning against the ball, step your feet away and roll the ball up and down, be sure you aren’t rolling over your spine with the ball but just to the side of it.  You can use the same technique to reach the lower muscles by starting with the ball just below your lowest ribs. '),
  (6,'Gluteus Medius', 'https://live.staticflickr.com/65535/50609334848_d39aa30c4e_w.jpg',  'Trigger Points in the Gluteus Medius are felt in the lower back just above and below the belt line often extending into the buttocks and hips. Back pain caused by this trigger point can be excruciating.  To find the Gluteus Medius trigger point place your hand at the top of you hip bone while shifting your weight onto one foot and feel for the contraction just below the top of your hip bone. '),

INSERT INTO notes(content, title, trigger_point_id) 
VALUES
  ('These are notes', 'title', 1 );
  

INSERT INTO trigger_points_user (id, user_id, trigger_points_id)
VALUES
(1,3,1),
(2,3,3),
(3,3,6);


COMMIT;
