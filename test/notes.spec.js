const knex = require('knex');
const app = require('../src/app');
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
        connection: process.env.TEST_DATABASE_URL,
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
});;

