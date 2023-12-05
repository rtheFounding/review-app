import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <section class="navbar-dark bg-dark header">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <nav class="navbar navbar-expand-lg ">
                  <a class="navbar-brand text-white" href="#">
                    AnyMeal Review Site
                  </a>

                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="about">About</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="help">Help</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
