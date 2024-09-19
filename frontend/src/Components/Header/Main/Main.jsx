import "./Main.css";

export function Main() {
  return (
    <main>
      <div className="img-box">
        <img className="img" src="./images/wedding-cake.jpg" alt="" />
        <div className="overlay">
          <a href="/wedding-cakes">Show Wedding Cakes</a>
        </div>
      </div>
      <div className="img-box">
        <img className="img" src="./images/kids-cake.jpg" alt="" />
        <div className="overlay">
          <a href="/kids-cake">Show Birthday Cakes </a>
        </div>
      </div>
      <div className="img-box">
        <img className="img" src="./images/regular-cake.jpg" alt="" />
        <div className="overlay">
          <a href="/regular-cake">Show Regular Cakes</a>
        </div>
      </div>
      <div className="img-box">
        <img className="img" src="./images/cupcake.jpg" alt="" />
        <div className="overlay">
          <a href="/cup-cake">Show Cup Cakes</a>
        </div>
      </div>
    </main>
  );
}
