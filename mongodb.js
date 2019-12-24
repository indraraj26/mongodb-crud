const { MongoClient: mongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

mongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  async (error, client) => {
    if (error) {
      return console.log('Something went wrong');
    }
    console.log('database connected successfully');

    const db = client.db(databaseName);
    // db.collection('users').insertOne(
    //   {
    //     name: 'indraraj',
    //     age: 23,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    //   },
    // );
    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'indra',
    //       age: 32,
    //     },
    //     {
    //       name: 'alexa',
    //       age: 32,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('unable to insert documents');
    //     }
    //     console.log(result.ops);
    //   },
    // );

    /* db.collection('tasks').insertMany(
      [
        {
          description: 'Buy an apple',
          completed: true,
        },
        {
          description: 'Buy an banana',
          completed: false,
        },
        {
          description: 'Get the gun',
          completed: true,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert documents');
        }
        console.log(result.ops);
      },
    ); */

    /*    db.collection('users').findOne({ name: 'alexa' }, (error, result) => {
      if (error) {
        return console.log('Unable to fetch');
      }
      console.log(result);
    }); */
    /* db.collection('users').findOne(
      { _id: new ObjectID('5dfcda9093519d6f400b57cd') },
      (error, result) => {
        if (error) {
          return console.log('Unable to fetch');
        }
        console.log(result);
      },
    ); */

    /*  db.collection('users')
      .find({ age: 23 })
      .skip(1)
      .count((error, result) => {
        console.log(result);
      }); */

    /*   db.collection('tasks').findOne(
      { _id: new ObjectID('5dfdc4d212c4aa4f1c20cb6d') },
      (error, result) => {
        if (error) {
          return console.log('unable to fetch');
        }
        console.log(result);
      },
    ); */

    /*  db.collection('tasks')
      .find({ completed: true })
      .toArray((error, result) => {
        if (error) {
          return console.log('unable to fetch');
        }
        console.log(result);
      }); */
    /* 
    try {
      const updateUser = await db.collection('users').updateOne(
        {
          _id: new ObjectID('5dfcda9093519d6f400b57cd'),
        },
        {
          $set: {
            age: 40,
          },
        },
      );
      if (updateUser) {
        console.log('User Updated successfully');
      }
    } catch (err) {
      console.log(err, 'Unable to update');
    } */

    /*   try {
      const updateUser = await db.collection('users').updateMany(
        {
          name: 'indraraj',
        },
        {
          $set: {
            age: 50,
          },
        },
      );
      if (updateUser) {
        console.log('Users Updated successfully');
      }
    } catch (err) {
      console.log(err, 'Unable to update users');
    } */
    /* 
    try {
      const deleteUser = await db
        .collection('users')
        .deleteOne({ _id: new ObjectID('5dfcda9093519d6f400b57cd') });

      if (deleteUser) {
        console.log('User deleted successfully');
      }
    } catch (err) {
      console.log(err, 'Unable to delete user');
    }
 */

    try {
      const deleteUser = await db
        .collection('users')
        .deleteMany({ name: 'indraraj' });

      if (deleteUser) {
        console.log('Users deleted successfully');
      }
    } catch (err) {
      console.log(err, 'Unable to delete users');
    }
  },
);
