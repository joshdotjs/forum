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

export const Reply = {
  thread: (_obj, { root }) => {
    return db.reply.findUnique({ where: { id: root?.id } }).thread()
  },
}
