import { db } from 'api/src/lib/db'
import { hashPassword } from '@redwoodjs/auth-dbauth-api'

const POSTS = [
  {
    id: 900,
    title: 'Welcome to the forum!',
    body: "This is the first post. Please leave a comment by creating an account and logging in!",
    userId: 1,
  },
  // {
  //   id: 901,
  //   title: 'A little more about me',
  //   body: "Raclette shoreditch before they sold out lyft. Ethical bicycle rights meh prism twee. Tote bag ennui vice, slow-carb taiyaki crucifix whatever you probably haven't heard of them jianbing raw denim DIY hot chicken. Chillwave blog succulents freegan synth af ramps poutine wayfarers yr seitan roof party squid. Jianbing flexitarian gentrify hexagon portland single-origin coffee raclette gluten-free. Coloring book cloud bread street art kitsch lumbersexual af distillery ethical ugh thundercats roof party poke chillwave. 90's palo santo green juice subway tile, prism viral butcher selvage etsy pitchfork sriracha tumeric bushwick.",
  //   userId: 2,
  // },
  // {
  //   id: 902,
  //   title: 'What is the meaning of life?',
  //   body: 'Meh waistcoat succulents umami asymmetrical, hoodie post-ironic paleo chillwave tote bag. Trust fund kitsch waistcoat vape, cray offal gochujang food truck cloud bread enamel pin forage. Roof party chambray ugh occupy fam stumptown. Dreamcatcher tousled snackwave, typewriter lyft unicorn pabst portland blue bottle locavore squid PBR&B tattooed.',
  //   userId: 3,
  // },
]
const THREADS = [
  {
    id: 1,
    title: 'Thread 1',
    body: "I'm baby single- origin coffee kickstarter lo - fi paleo skateboard.Tumblr hashtag austin whatever DIY plaid knausgaard fanny pack messenger bag blog next level woke.Ethical bitters fixie freegan,helvetica pitchfork 90's tbh chillwave mustache godard subway tile ramps art party. Hammock sustainable twee yr bushwick disrupt unicorn, before they sold out direct trade chicharrones etsy polaroid hoodie. Gentrify offal hoodie fingerstache.",
    userId: 1,
  },
  {
    id: 2,
    title: 'Thread 2',
    body: "Raclette shoreditch before they sold out lyft. Ethical bicycle rights meh prism twee. Tote bag ennui vice, slow-carb taiyaki crucifix whatever you probably haven't heard of them jianbing raw denim DIY hot chicken. Chillwave blog succulents freegan synth af ramps poutine wayfarers yr seitan roof party squid. Jianbing flexitarian gentrify hexagon portland single-origin coffee raclette gluten-free. Coloring book cloud bread street art kitsch lumbersexual af distillery ethical ugh thundercats roof party poke chillwave. 90's palo santo green juice subway tile, prism viral butcher selvage etsy pitchfork sriracha tumeric bushwick.",
    userId: 2,
  },
  {
    id: 3,
    title: 'Thread 3',
    body: 'Meh waistcoat succulents umami asymmetrical, hoodie post-ironic paleo chillwave tote bag. Trust fund kitsch waistcoat vape, cray offal gochujang food truck cloud bread enamel pin forage. Roof party chambray ugh occupy fam stumptown. Dreamcatcher tousled snackwave, typewriter lyft unicorn pabst portland blue bottle locavore squid PBR&B tattooed.',
    userId: 3,
  },
]
const REPLIES = [
  {
    id: 1,
    body: "I'm baby single- origin coffee kickstarter lo - fi paleo skateboard.Tumblr hashtag austin whatever DIY plaid knausgaard fanny pack messenger bag blog next level woke.Ethical bitters fixie freegan,helvetica pitchfork 90's tbh chillwave mustache godard subway tile ramps art party. Hammock sustainable twee yr bushwick disrupt unicorn, before they sold out direct trade chicharrones etsy polaroid hoodie. Gentrify offal hoodie fingerstache.",
    threadId: 1
    // userId: 1,
  },
  {
    id: 2,
    body: "Raclette shoreditch before they sold out lyft. Ethical bicycle rights meh prism twee. Tote bag ennui vice, slow-carb taiyaki crucifix whatever you probably haven't heard of them jianbing raw denim DIY hot chicken. Chillwave blog succulents freegan synth af ramps poutine wayfarers yr seitan roof party squid. Jianbing flexitarian gentrify hexagon portland single-origin coffee raclette gluten-free. Coloring book cloud bread street art kitsch lumbersexual af distillery ethical ugh thundercats roof party poke chillwave. 90's palo santo green juice subway tile, prism viral butcher selvage etsy pitchfork sriracha tumeric bushwick.",
    threadId: 2,
    // userId: 2,
  },
  {
    id: 3,
    body: 'Meh waistcoat succulents umami asymmetrical, hoodie post-ironic paleo chillwave tote bag. Trust fund kitsch waistcoat vape, cray offal gochujang food truck cloud bread enamel pin forage. Roof party chambray ugh occupy fam stumptown. Dreamcatcher tousled snackwave, typewriter lyft unicorn pabst portland blue bottle locavore squid PBR&B tattooed.',
    threadId: 3,
    // userId: 3,
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
      { name: 'josh h.',       email: 'admin@admin.com', password: 'admin', roles: 'admin'     },
      { name: 'moderator doe', email: 'mod@mod.com',     password: 'mod'  , roles: 'moderator' },
      { name: 'user doe',      email: 'user@user.com',   password: 'user' , roles: 'user'      },
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
    // for (const reply of REPLIES) {
    //   await db.reply.upsert({
    //     where: { id: reply.id },
    //     create: { ...reply },
    //     update: {},
    //   })
    //   const msg = `  Seeded "reply ID: ${reply.id}"`
    //   console.log(msg)
    // }

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