import React from 'react';
const Banner = () => {
    return (
        <div className='mx-auto w-[90%]'>
            <div className="hero h-[500px] rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/Y0SDRxk/Rectangle-1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <div className='flex gap-5 items-center justify-center'>
     <button className="btn btn-success">Explore</button>
     <button className="btn ">Our Feedback</button>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;