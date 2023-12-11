import { MetaTags } from '@redwoodjs/web'
import { Form, TextField, Submit } from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <h1>ContactPage</h1>
      <p>
        Find me in <code>./web/src/pages/ContactPage/ContactPage.jsx</code>
      </p>

      <Form onSubmit={onSubmit}>
        <TextField name="input" />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
