export const TableHeader = (props) => {
  return (
    <thead>
      <tr>
        {props.headings.map((heading) => (
          <th>{heading}</th>
        ))}
      </tr>
    </thead>
  );
};
