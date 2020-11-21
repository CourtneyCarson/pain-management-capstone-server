const knex = require('knex')
const app = require('../src/app')
const config = require('../src/config');
const supertest = require('supertest');
const NotesService = require('../src/notes/notes-service');




describe(`GET /api/notes/:tp_id`, () => {

  function makeNoteArray() {
    return [
      {
        content: 'content',
        id: 1,
        title: 'title',
        trigger_point_id: 1
      },
    ];
  }

  describe(`GET /api/notes/:tp_id`, () => {
    let db;

    before('make knex instance', () => {
      db = knex({
        client: 'pg',
        connection: process.env.TEST_DATABASE_URL ,
      });
      app.set('db', db);
    });

    after('disconnect from db', () => db.destroy());

    before('clean the table', () =>
      db.raw('TRUNCATE notes RESTART IDENTITY CASCADE')
    );

    afterEach('cleanup', () =>
      db.raw('TRUNCATE  notes RESTART IDENTITY CASCADE')
    );

    context('Given there are notes in the database', () => {
      const testNote = makeNoteArray();

      beforeEach('insert notes', () => {
        return db.into('notes').insert(testNote);
      });

      it('responds with 200 and all of the notes', () => {
        return supertest(app)
          .get('/api/notes')
          .set('Authorization', `Bearer ${process.env.API_TOKEN}`)
          .expect(res => {
            expect(res.body[0].note).to.eql(testNote[0].note);
            expect(res.body[0]).to.have.property('id');
          });
      });
    });
  });
})



























// describe('Notes Endpoint', function () {
//   let db;
//   let testNote = [
//     {
//       content: 'content',
//       date_created: '2020-11-21',
//       id: 1,
//       title: 'title',
//       trigger_point_id: 1
//     }
//   ]

//   before('make knex instance', () => {
//     db = knex({
//       client: 'pg',
//       connection: process.env.TEST_DATABASE_URL ,
//     });
//     app.set('db', db)
//   })

//   before('clean the tables before', () => db.raw('TRUNCATE TABLE users, notes, trigger_points, trigger_points_user RESTART IDENTITY CASCADE'));
//   afterEach('cleanup', () => db.raw('TRUNCATE TABLE users, notes, trigger_points, trigger_points_user RESTART IDENTITY CASCADE;'));
//   after('disconnect from db', () => db.destroy());

//   context(`Given 'notes' has data`, () => {
//     before(() => {
//       return db
//         .into('notes')
//         .insert(testNote)
//     })
//     it(`gets note`, () => {
//       return NotesService.getAllNotes(db, 'title')
//         .then(actual => {
//           expect(actual).to.eql(
//             {
//               content: 'content',
//               date_created: '2020-11-21',
//               id: 1,
//               title: 'title',
//               trigger_point_id: 1
//             }
//           )
//         })
//     })
//   })
// })









// describe(`GET /api/notes/:tp_id`, () => {
//   let db;
//   let Notes = [
//     {
//       content: 'content',
//       date_created: '2020-11-21',
//       id: 1,
//       title: 'title',
//       trigger_point_id: 1
//     }
//   ]

//   before('make knex instance', () => {
//     db = knex({
//       client: 'pg',
//       connection: process.env.TEST_DATABASE_URL ,
//     })
//     app.set('db', db)
//   });


//   before('cleanup', () => db.raw('TRUNCATE TABLE notes RESTART IDENTITY;'));

//   afterEach('cleanup', () => db.raw('TRUNCATE TABLE notes RESTART IDENTITY;'));

//   after('disconnect from the database', () => db.destroy());


//   describe('GET notes by id', () => {

//     beforeEach('insert some notes', () => {
//       return db('notes').insert(Notes);
//     })

//     it('should return correct notes when given an id', () => {
//       let note;
//       return db('notes')
//         .first()
//         .then(_doc => {
//           note = _doc
//           return supertest(app)
//             .get(`/api/notes/${note.id}`)
//             .set('Authorization', `Bearer ${process.env.API_TOKEN}`)
//             .expect(200);
//         })
//         .then(res => {
//           expect(res.body).to.be.an('object');
//           expect(res.body).to.include.keys('id', 'title', 'content');
//           expect(res.body.id).to.equal(note.id);
//           expect(res.body.title).to.equal(note.title);
//           expect(res.body.content).to.equal(note.content);
//         });
//     });
//   });
// })