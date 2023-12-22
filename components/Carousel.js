import Image from "next/image"

export default function Carousel(){
    return(
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <Image className="d-block w-100" src="/img/bacon.jpg" height="550" width="550" alt="bacon" priority />
                </div>
                <div className="carousel-item">
                <Image className="d-block w-100" src="/img/eggs.jpg" height="550" width="550" alt="eggs" priority />
                </div>
                <div className="carousel-item">
                <Image className="d-block w-100" src="/img/waffles.jpg" height="550" width="550" alt="waffles" priority />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}