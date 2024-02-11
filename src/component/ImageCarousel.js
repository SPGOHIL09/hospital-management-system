import './ImageCarousel.css';
import {Grid} from '@mui/material'
const ImageCarousel = ()=>{
    return(
        <>
            <Grid container>
      <Grid item xs={12}>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/img/carousel/hospital_1.jpeg"
                className="d-block w-100"
                alt="1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/carousel/health.jpeg"
                className="d-block w-100"
                alt="2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/carousel/hospital_room_1.jpeg"
                className="d-block w-100"
                alt="3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Grid>
    </Grid>
        </>
    );
}
export default ImageCarousel;;