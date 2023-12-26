interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string[];
  };
}

function Category(props: CategoryProps) {
  const { categories } = props.params;
  console.log(props);
  return <div>Dynamic Route {categories}</div>;
}

export default Category;
