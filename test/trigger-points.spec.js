const knex = require('knex');
const app = require('../src/app');
const TriggerPointService = require('../src/triggerpoint/trigger-point-service');




describe('TP Endpoint', function () {
  let db;
  let testTp = [
    {
      id: 1,
      image: 'text',
      title: 'title',
      content: 'content',
    }
  ]

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db)
  })

  before('clean the tables before', () => db.raw('TRUNCATE TABLE trigger_points RESTART IDENTITY CASCADE'));
  afterEach('cleanup', () => db.raw('TRUNCATE TABLE trigger_points RESTART IDENTITY CASCADE;'));
  after('disconnect from db', () => db.destroy());

  context(`Given 'trigger_points' has data`, () => {
    before(() => {
      return db
        .into('trigger_points')
        .insert(testTp)
    })
    it(`gets trigger_points`, () => {
      return TriggerPointService.getAllTriggerPoints(db, 'title')
        .then(actual => {
          expect(actual).to.eql(
            {
              id: 1,
              image: 'text',
              title: 'title',
              content: 'content',
            }
          )
        })
    })
  })
})