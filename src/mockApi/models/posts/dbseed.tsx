const fs = require('fs');
const faker = require('faker');
const uuid = require('uuid/v4');
const slugify = require('slugify');
import UsersDb from '../users/db.json';
import { PostType } from '../../../model/posts/type';

module.exports = async function() {
  let db: PostType[] = [];
  const dayInMilliseconds = 24 * 60 * 60 * 1000;
  const getRandomTimeDeltaWithinDay = () => Math.floor(Math.random() * dayInMilliseconds);
  const timeStart = Date.now() - 20 * dayInMilliseconds;

  UsersDb.forEach(u => {
    // Generate less posts than normal to reduce bundle size
    for (let j = 0; j < 5; j++) {
      const createdAt = timeStart + j * dayInMilliseconds + getRandomTimeDeltaWithinDay();
      const title = faker.hacker.phrase().slice(0, -1);
      db.push({
        id: uuid(),
        createdAt,
        updatedAt: createdAt + dayInMilliseconds,
        userId: u.id,
        title,
        slug: slugify(title, { lower: true }),
        body: faker.lorem.paragraph() + '\n\n' + faker.lorem.paragraph(),
        hasFeaturedImage: false
      });
    }
  });
  await fs.writeFileSync(__dirname + '/db.json', JSON.stringify(db, null, 2));
  console.log('Posts: Done');
};
