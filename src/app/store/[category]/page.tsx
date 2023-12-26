interface CategoryProps {
  params: {
    category: string;
  };
}

function Category(props: CategoryProps) {
  console.log(props);
  return <div>Dynamic Route {props?.params?.category}</div>;
}

export default Category;
