import React from 'react'

import humanize from 'humanize-string'

const MAX_STRING_LENGTH = 150

export const formatEnum = (values) => {
  let output = ''

  if (Array.isArray(values)) {
    const humanizedValues = values.map((value) => humanize(value))
    output = humanizedValues.join(', ')
  } else if (typeof values === 'string') {
    output = humanize(values)
  }

  return output
}

export const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

export const truncate = (value, max=MAX_STRING_LENGTH) => {
  let output = value?.toString() ?? ''

  if (output.length > max) {
    output = output.substring(0, max) + '...'
  }

  return output
}

export const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

export const timeTag = (dateTime) => {
  let output = ''

  if (dateTime) {
    output = (
      <time dateTime={dateTime} title={dateTime}>
        {new Date(dateTime).toUTCString()}
      </time>
    )
  }

  return output
}

export const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

import dayjs from "dayjs" // date_time is coming in from the DB
export const formatDate = (date_time) => dayjs(date_time).format('YYYY-MM-DD');
export const formatTime = (date_time) => dayjs(date_time).format('h:mm:ss a');