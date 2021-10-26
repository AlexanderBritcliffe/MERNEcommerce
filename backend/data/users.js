import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', ),
    isAdmin: true
  },

  {
    name: 'John Doe',
    email: 'John@example.com',
    password: xxxx,
  },

  {
    name: 'Jane Doe',
    email: 'Jane@example.com',
    password: xxxx,
  },
]
