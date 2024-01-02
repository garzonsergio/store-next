interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string[];
  };
}

export default function Category(props: CategoryProps) {
  const { categories } = props.params;
  console.log(categories);
  return <div>Dynamic Route {categories}</div>;
}
