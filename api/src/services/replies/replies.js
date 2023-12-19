import { db } from 'src/lib/db'

export const replies = () => {
  return db.reply.findMany()
}

export const reply = ({ id }) => {
  return db.reply.findUnique({
    where: { id },
  })
}

export const Reply = {
  thread: (_obj, { root }) => {
    return db.reply.findUnique({ where: { id: root?.id } }).thread()
  },
}
