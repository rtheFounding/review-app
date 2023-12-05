import { useLoaderData, Link } from "react-router-dom";

export default function Resturants() {
  const resturants = useLoaderData();

  return (
    <div className="resturants">
      {resturants.map((resturant) => (
        <Link to="/" key={resturant.id}>
          <p>{resturant.name}</p>
          <p>Based in {resturant.location}</p>
        </Link>
      ))}
    </div>
  );
}

// loader function
export const resturantLoader = async () => {
  const res = await fetch("http://localhost:4000/restaurants");

  return res.json();
};
