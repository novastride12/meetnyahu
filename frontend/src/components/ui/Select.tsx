interface Props {
  options: string[];
}

export default function Select({ options }: Props) {
  return (
    <select className="select">
      {options.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
}