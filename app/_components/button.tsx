interface IButton {
  title: string | undefined;
  onClick: any;
}

export default function Button({ title, onClick }: IButton) {
  return (
    <button
      className="bg-teal-500 text-white font-semibold px-6 py-3 rounded-4xl shadow-lg hover:bg-teal-600 transition"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
