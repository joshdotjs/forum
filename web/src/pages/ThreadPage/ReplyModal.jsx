import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Form,
  Label,
  Submit,
  FormError,
  TextField,
  TextAreaField,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

const CREATE = gql`
  mutation CreateReplyMutation($input: CreateReplyInput!) {
    createReply(input: $input) {
      id
      body
      createdAt
    }
  }
`

const MainForm = ({ threadId, setOpen }) => {

  const [createReply, { loading, error }] = useMutation(CREATE)

  const onSubmit = (input) => {

    console.log('onSubmit()  --  input', input);
    console.log('onSubmit()  --  threadId: ', threadId);

    createReply({
      variables: {
        input: { ...input, threadId, }
      }  // variables:
    }) // createReply()
  } // onSubmit

  return (
    <Form className="mt-4 w-full" onSubmit={onSubmit}>
      <FormError
        error={error}
        titleClassName="font-semibold"
        wrapperClassName="bg-red-100 text-red-900 text-sm p-3 rounded"
      />

      <TextAreaField
        name="body"
        className="block w-full p-1 border rounded h-24 text-xs mb-6"
        validation={{ required: true }}
      />

      <Submit
        disabled={loading}
        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => setOpen(false)}
      >
        Create Reply
      </Submit>
    </Form>
  );
};

export default function EntryModal({ threadId, open, setOpen }) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <h3 className="font-light text-lg text-gray-600">Leave a Reply</h3>
                <MainForm {...{ threadId, setOpen }} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

