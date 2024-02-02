function ContentSection() {
  return (
    <div>
      <div className="w-full mb-[50px] ">
        <div className=" px-5 md:flex md:px-[5%] md:w-full ">
          <div className="px-6 md:w-[50%] md:h-[300px] lg:h-[400px] ">
            <img
              src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706527936/ecommerce/restaurant-interior_ehrihz.jpg"
              alt="restaurant room"
              className=" h-full w-full object-cover "
            />
          </div>
          <div className="px-6 md:w-[50%] mt-6 ">
            <h2 className="font-bold text-2xl">One Time Experience</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta
              nobis facere commodi, nam ipsum
            </p>
          </div>
        </div>
        <div className="px-[11%] ">
            <h3 className="font-bold text-2xl">Quality</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo mollitia omnis temporibus a asperiores officiis vel explicabo illo veniam dolor ab, iste error nisi dignissimos minima eaque deserunt laboriosam.</p>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
