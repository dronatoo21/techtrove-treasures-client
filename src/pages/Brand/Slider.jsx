const Slider = () => {
    return (
        <div>
            <div>
            <div className="carousel w-full md:h-[500px]">
              <div id="slide1" className="carousel-item relative w-full ">
                <img src="https://i.ibb.co/4PBTbRv/gsmarena-009.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn bg-slate-800 text-white border-none btn-circle">❮</a> 
                  <a href="#slide2" className="btn bg-slate-800 text-white border-none btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/SNTXmFp/309f13d3903bc75d0ed9abcb33b477b1.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn bg-slate-800 text-white border-none btn-circle">❮</a> 
                  <a href="#slide3" className="btn bg-slate-800 text-white border-none btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/hXNdVJm/iphone-13-cover.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn bg-slate-800 text-white border-none btn-circle">❮</a> 
                  <a href="#slide4" className="btn bg-slate-800 text-white border-none btn-circle">❯</a>
                </div>
              </div> 
            </div>
            </div>
        </div>
    );
};

export default Slider;