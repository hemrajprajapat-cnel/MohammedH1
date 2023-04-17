export const Features_revamp = (props) => {
  return (
      <div id="features_revamp">
        <div className="container blackbground">
          <div className="row">
            <div className="col-xs-12 col-md-6 blackbox">
              <div className="about-text">
                <h2>What we do</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/overview.png" className="img-responsive" alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
  );
};