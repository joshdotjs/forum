export const standard = defineScenario({
  reply: {
    one: {
      data: {
        body: 'String',
        thread: {
          create: {
            title: 'String',
            body: 'String',
            user: {
              create: {
                email: 'String7588019',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        body: 'String',
        thread: {
          create: {
            title: 'String',
            body: 'String',
            user: {
              create: {
                email: 'String709863',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})
