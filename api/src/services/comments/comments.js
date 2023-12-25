import { db } from 'src/lib/db'

export const comments = ({ postId }) => {
  return db.comment.findMany({ where: { postId } })
}

export const comment = ({ id }) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const createComment = ({ input }) => {

  console.log('input: ', input);

  return db.comment.create({
    data: {
      ...input,
      userId: context.currentUser.id,
    },
  })
}

export const deleteComment = ({ id }) => {
  return db.comment.delete({
    where: { id },
  })
}

export const Comment = {
  post: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).post()
  },
  // user: (_obj, { root }) => {
  //   return db.comment.findFirst({ where: { id: root.id } }).user();
  // },
}
