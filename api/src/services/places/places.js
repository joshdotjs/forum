import { db } from 'src/lib/db'

export const places = () => {
  return db.place.findMany()
}

export const place = ({ id }) => {
  return db.place.findUnique({
    where: { id },
  })
}

export const createPlace = ({ input }) => {
  return db.place.create({
    data: input,
  })
}

export const updatePlace = ({ id, input }) => {
  return db.place.update({
    data: input,
    where: { id },
  })
}

export const deletePlace = ({ id }) => {
  return db.place.delete({
    where: { id },
  })
}
