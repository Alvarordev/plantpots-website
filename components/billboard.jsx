const Billboard = () => {
    return(
        <div className="bg-[#91e9e2] h-full sm:h-[30rem] m-4 sm:m-6 lg:m-7 rounded-2xl overflow-hidden relative">
          <div className="flex flex-col sm:flex-row items-center justify-between h-full px-6 pt-7 sm:pt-0 text-center sm:text-left md:px-15 lg:px-20">
            <article className="flex flex-col gap-3">
              <h1 className="text-3xl md:text-5xl font-extrabold">
                Loved by gardens <br /> Trusted by gardeners
              </h1>
              <p className="max-w-[500px] px-1 text-xs sm:text-sm sm:px-2 text-slate-600">
                Rosseta is the perfect place to start building your dream garden or
                help you decor your house the way you always dreamed.
              </p>
            </article>
            <div className="h-full relative flex">
              <img src="/plant-pot.webp" alt="plant" className="relative z-10 h-full"/>
              <div className="h-[9rem] w-[18rem] bg-[#feb700] absolute z-0 bottom-0 left-0 right-0 mx-auto sm:ml-[4.3rem]" />
              <div className="h-[18rem] w-[18rem] bg-[#feb700] absolute z-0 bottom-0 left-0 right-0 mx-auto sm:ml-[4.3rem] rounded-[50%]" />
            </div>
          </div>
        </div>
    )
}

export default Billboard;