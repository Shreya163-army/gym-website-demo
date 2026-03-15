import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";

function Gallery(){
  return(
    <section className="gallery">

      <h2>Transformations</h2>

      <div className="gallery-grid">
        <img src={g1} alt="Transformation 1" />
        <img src={g2} alt="Transformation 2" />
        <img src={g3} alt="Transformation 3" />
      </div>

    </section>
  )
}

export default Gallery