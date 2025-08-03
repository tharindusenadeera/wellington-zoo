interface IButton {
  title: string;
}

export default function Button({ title }: IButton) {
  return (
    <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-pink-100 transition">
      {title}
    </button>
  );
}
