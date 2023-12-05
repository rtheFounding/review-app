import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="resturant-layout">
      <h2>Resturants</h2>
      <p>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid commodi.
      </p>
      <Outlet />
    </div>
  );
}
