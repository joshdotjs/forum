import { db } from 'src/lib/db'

export const posts = () => {
  return db.post.findMany()
}

export const post = ({ id }) => {
  return db.post.findUnique({ where: { id } })
}

// Relation resolver:
export const Post = {
  user: (_obj, { root }) =>
    db.post.findFirst({ where: { id: root.id } }).user(),
  comments: (_obj, { root }) =>
    db.post.findFirst({ where: { id: root.id } }).comments(),
}