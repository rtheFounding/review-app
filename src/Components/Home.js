import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <section className="">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="Images/kbbq.jpg"
                alt="First slide"
                style={{ height: "800px" }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 "
                src="Images/kbbq.jpg"
                alt="Second slide"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section class="" id="destinations">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary">Favourite Dishes</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/ig-3.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Japache</h4>
                  <p class="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/t-2.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Bao's</h4>
                  <p class="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/t-1.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Pork Dumplings</h4>
                  <p class="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light mt-5" id="tourist">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">More Foods</h3>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="Images/a-range-of-delicious.jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                    alt="burger"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  Big Bobby's
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  Lcoation: Atlanta, GA
                </h6>
                <p class="font-weight-normal dark-grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="Images/a-range-of-delicious.jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                    alt="pasta"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">Wing Stop</h4>
                <h6 class="font-weight-bold blue-text my-3">
                  Location: Atlanta, GA
                </h6>
                <p class="font-weight-normal dark-grey-text">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="Images/a-range-of-delicious.jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                    alt="Wings"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  Big Sisters
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  Location: Duluth, GA
                </h6>
                <p class="font-weight-normal dark-grey-text">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h6 class="text-white text-center mb-3 mt-3">
                Copyright @ AnyMeal's
              </h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
