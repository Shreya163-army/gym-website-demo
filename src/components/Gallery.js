import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";

function Gallery(){
  return(
    <section className="gallery">

      <h2>Transformations</h2>

      <div className="gallery-grid">
        <img src={g1}/>
        <img src={g2}/>
        <img src={g3}/>
      </div>

    </section>
  )
}

export default Gallery