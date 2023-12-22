import { db } from 'api/src/lib/db'
import { hashPassword } from '@redwoodjs/auth-dbauth-api'

const POSTS = [
  {
    id: 1,
    title: 'Welcome to the blog!',
    body: "Welcome to our blog! Here, we share our thoughts on the latest trends in technology, provide useful tips and tutorials, and discuss various topics that we're passionate about. Stay tuned for more updates!",
    userId: 1,
  },
  {
    id: 2,
    title: 'A little more about me',
    body: "Hello, I'm John Doe, a software engineer with a passion for coding and technology. In my free time, I enjoy reading, hiking, and exploring new places. I'm excited to share my experiences and knowledge with you through this blog.",
    userId: 2,
  },
  {
    id: 3,
    title: 'What is the meaning of life?',
    body: 'The meaning of life is a philosophical question concerning the purpose and significance of life or existence in general. This concept has been approached by many different perspectives, including philosophy, religion, and science. Stay tuned as we explore this topic in depth in our upcoming posts.',
    userId: 3,
  },
]
const THREADS = [
  {
    id: 1,
    title: 'Thread 1',
    body: "Welcome to our first thread! Here, we discuss the latest trends in technology, provide useful tips and tutorials, and share our thoughts on various topics. Join the conversation and share your thoughts!",
    userId: 1,
  },
  {
    id: 2,
    title: 'Thread 2',
    body: "Hello, I'm John Doe, a software engineer with a passion for coding and technology. In this thread, I'll share my experiences and knowledge with you. Feel free to ask any questions or share your own experiences.",
    userId: 2,
  },
  {
    id: 3,
    title: 'Thread 3',
    body: 'The meaning of life is a philosophical question concerning the purpose and significance of life or existence in general. This thread is dedicated to discussing this topic from many different perspectives, including philosophy, religion, and science. Join us as we explore this topic in depth.',
    userId: 3,
  },
]
const REPLIES = [
  {
    id: 1,
    body: "I totally agree with the latest trends in technology you've mentioned. I've been following them closely and find them very promising. Looking forward to more updates on this thread!",
    threadId: 1,
    userId: 1,
  },
  {
    id: 2,
    body: "Hi John Doe, it's great to know more about you. I'm also a software engineer and share similar interests. Looking forward to learning from your experiences and knowledge.",
    threadId: 2,
    userId: 2,
  },
  {
    id: 3,
    body: 'The meaning of life is indeed a deep topic. I believe it varies from person to person and is influenced by our personal experiences, beliefs, and values. Excited to explore this topic further in this thread.',
    threadId: 3,
    userId: 3,
  },
]

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      // { name: 'alice', email: 'alice@example.com' },
      // { name: 'mark', email: 'mark@example.com' },
      // { name: 'jackie', email: 'jackie@example.com' },
      // { name: 'bob', email: 'bob@example.com' },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    await Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      data.map(async (data) => {
        const record = await db.userExample.create({ data })
        console.log(record)
      })
    )

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/auth-dbauth-api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (const user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }




    // create an admin user
    // await db.user.upsert({
    //   where: { id: 1 },
    //   create: {
    //     id: 1,
    //     name: 'Admin Doe',
    //     email: 'admin@admin.com',
    //     hashedPassword:
    //       'ad9563042fe9f154419361eeeb775d8a12f3975a3722953fd8e326dd108d5645',
    //     salt: '1c99de412b219e9abf4665293211adce',
    //     roles: 'admin',
    //   },
    //   update: {},
    // })
    const users = [
      { name: 'admin doe',     email: 'admin@admin.com', password: 'admin', roles: 'admin'     },
      { name: 'moderator doe', email: 'mod@mod.com',     password: 'mod'  , roles: 'moderator' },
      { name: 'user doe',      email: 'user@user.com',   password: 'user' , roles: 'user'      }
    ]

    for (const user of users) {
      const [hashedPassword, salt] = hashPassword(user.password)
      await db.user.create({
        data: {
          name: user.name,
          email: user.email,
          roles: user.roles,
          hashedPassword,
          salt,
        }
      })
    }

    for (const post of POSTS) {
      await db.post.upsert({
        where: { id: post.id },
        create: { ...post },
        update: {},
      })
      const msg = `  Seeded "${post.title}"`
      console.log(msg)
    }
    for (const thread of THREADS) {
      await db.thread.upsert({
        where: { id: thread.id },
        create: { ...thread },
        update: {},
      })
      const msg = `  Seeded "${thread.title}"`
      console.log(msg)
    }
    for (const reply of REPLIES) {
      await db.reply.upsert({
        where: { id: reply.id },
        create: { ...reply },
        update: {},
      })
      const msg = `  Seeded "reply ID: ${reply.id}"`
      console.log(msg)
    }

    console.info('')
    console.info('  Seeded admin user:')
    console.info('')
    console.info('    Email: admin@admin.com')
    console.info('    Password: admin')
    console.info('')
    console.info(`  (Please don't use this login in a production environment)`)
    console.info('')
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}