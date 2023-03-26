const db = require('../util/database')
const People = require('../model/product')

exports.getPosts = (req, res, next) => {
  let Posts = []
  
  // db.execute('SELECT * FROM people')
  //     .then(([rows, fieldData]) => {
  //         Posts = rows.map(x => x.title)
  //         console.log(Posts)
  //         res.status(200).json({
  //           // posts: [{ title: 'Ayah', content: 'Ayah Aja!' },
  //           //         { title: 'Bunda', content: 'This is the second post!' }
  //           //        ]
        
  //           Posts
  //         });          
  //     })
  //     .catch(err => console.log(err));

  People.findAll()
    .then(
      people => {
        res.status(200).json(
          // posts: [{ title: 'Ayah', content: 'Ayah Aja!' },
          //         { title: 'Bunda', content: 'This is the second post!' }
          //        ]
          { posts: people }
      )})
    .catch();
}

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content);

  // Create post in db
  // db.execute('INSERT INTO people (title, name, createdAt, updatedAt) VALUES (?, ?, ?, ?)',
  //           [title, content, '20230320', '20230320'])
  // res.status(201).json({
  //   message: 'Post created successfully!',
  //   post: { id: new Date().toISOString(), title: title, content: content }
  // });

  People.create({title: title, name: content})
    .then()
    .catch()
}


exports.delPost = (req, res, next) => {
  console.log(req.body)
  // People.findOne({where: {title: req.body.title}})
  //   .then(people => {
  //     people.destroy()
  //     res.status(200).json(
  //       { message: 'deleted successfully' })
  //   })
  //   .catch();

  People.findByPk(req.body.title)
    .then(people => {
      people.destroy();
      res.status(200).json(
        { message: 'deleted successfully' })      
    })
    .catch();
}