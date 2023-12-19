const Button = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default Button
