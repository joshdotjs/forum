import { db } from 'src/lib/db'

export const replies = ({ threadId }) => {
  return db.reply.findMany({ where: { threadId } })
}

export const reply = ({ id }) => {
  return db.reply.findUnique({
    where: { id },
  })
}
export const createReply = ({ input }) => {

  console.log('/api/src/services/replies/createReply({ input }) -- input: ', input);

  return db.reply.create({
    data: input,
  });
}
export const deleteReply = ({ id }) => {
  return db.reply.delete({
    where: { id },
  })
}

// https://redwoodjs.com/docs/tutorial/chapter7/api-side-currentuser#add-user-relation-resolver
// -declare a variable with the same name as the model this service is for: Reply for the replies service.
// -set that to an object containing keys that are the same as the fields that are going to be looked up,
//  in this case thread & user.
// -when GraphQL invokes this function it passes a couple of arguments,
//  one of which is root which is the object that was resolved to start with,
//  in this case the reply in our GraphQL query:
//    query Replies {
//      replies(threadId: 1) { <-- root
//        id
//        body
//        thread {
//          title
//          # user {
//          #   name
//          # }
//        }
//        user {
//          name
//        }
//      }
//    }
//
// -where:
//    type Reply {
//      id: Int!
//      body: String!
//      thread: Thread!
//      user: User!
//      threadId: Int!
//      createdAt: DateTime!
//    }
export const Reply = {
  thread: (_obj, { root }) => {
    return db.reply.findUnique({ where: { id: root?.id } }).thread()
  },
  user: (_obj, { root }) => {
    return db.reply.findFirst({ where: { id: root.id } }).user()
  },
}
