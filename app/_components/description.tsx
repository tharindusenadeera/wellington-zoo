import Button from './button';

interface IDescription {
  title: String;
  description: String;
}

export default function Description({ title, description }: IDescription) {
  return (
    <div className="text-3xl">
      <div className="pt-2">{title}</div>
      <div className="mt-3">
        <p>{description}</p>
      </div>
    </div>
  );
}
