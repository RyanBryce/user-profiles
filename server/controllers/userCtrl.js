var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: (req, res, next) => {
    var user;
    for (var i = 0; i < users.length; i++) {
      if( users[i].name == req.body.name &&  users[i].password == req.body.password){
        user = users[i]
        req.session.currentUser = user;
      }
    };
    if (user) {
      res.json({ userFound: true });
    } else {
      res.json({userFound: false})
    }

    // users.forEach(function(person) {
    //   console.log("inside for", person);
    //   if( person.name == req.body.name &&  person.password == req.body.password){
    //
    //     res.json({ userFound: true });
    //     req.session.currentUser = person;
    //
    //   }else {
    //
    //     res.json({userFound: false})
    //   }
    // })

  }
}
