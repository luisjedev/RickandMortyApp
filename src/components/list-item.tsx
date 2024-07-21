import { useNavigate } from "react-router-dom";

type ListItemProps = {
  id: number;
  domain: string;
  header: string;
  title: string;
  footer: string;
};

export function ListItem({
  id,
  domain,
  header,
  title,
  footer,
}: Readonly<ListItemProps>) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/details/${domain}/${id}`)}
      className="list-item"
    >
      <header className="line-clamp-1 text-sm text-gray-600">
        {header.toUpperCase()}
      </header>
      <h1 className="font-bold text-start line-clamp-2">{title}</h1>
      <footer className="text-sm text-gray-600 line-clamp-1">{footer}</footer>
    </button>
  );
}
