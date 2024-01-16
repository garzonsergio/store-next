interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string[];
  };
}

export default function Category(props: CategoryProps) {
  const { categories } = props.params;
  throw new Error("fuck the police");
  return <div>Dynamic Route {categories}</div>;
}
