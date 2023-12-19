import { db } from 'src/lib/db'

export const threads = () => {
  return db.thread.findMany()
}

export const thread = ({ id }) => {
  return db.thread.findUnique({
    where: { id },
  })
}

export const createThread = ({ input }) => {
  return db.thread.create({
    data: input,
  })
}

export const updateThread = ({ id, input }) => {
  return db.thread.update({
    data: input,
    where: { id },
  })
}

export const deleteThread = ({ id }) => {
  return db.thread.delete({
    where: { id },
  })
}

export const Thread = {
  user: (_obj, { root }) =>
    db.thread.findFirst({ where: { id: root.id } }).user(),
}