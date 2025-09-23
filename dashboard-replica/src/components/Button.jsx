// ✅ Button.jsx
export default function Button({ text }) {
  return (
    <button
      type="submit" // ✅ ensures form onSubmit runs
      className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      {text}
    </button>
  );
}
