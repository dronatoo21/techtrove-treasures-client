const OurTeam = () => {
    return (
        <div>
            <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:gap-0 md:gap-5 gap-10 lg:grid-cols-4 mb-28 py-5">
            <div >
                <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/hXqLVd6/prf.jpg" alt="img" />
                <h2 className="text-2xl mt-3 font-bold">Henry Nicholas</h2>
                <p className="font-semibold text-xl"><i>@Henry</i></p>
            </div>
            <div>
                <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/5xVh4kK/agn2.jpg" alt="img" />
                <h2  className="text-2xl mt-3 font-bold">Maria Gomez</h2>
                <p className="font-semibold text-xl"><i>@Gomex</i></p>
            </div>
            <div>
                <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/DYKhzyV/agn1.jpg" alt="img" />
                <h2  className="text-2xl mt-3 font-bold">Arman Alam</h2>
                <p className="font-semibold text-xl"><i>@Arman</i></p>
            </div>
            <div>
                <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/x19DnW4/prf4.jpg" alt="img" />
                <h2  className="text-2xl mt-3 font-bold">Nayan Khan</h2>
                <p className="font-semibold text-xl"><i>@Nayan</i></p>
            </div>
        </div>
        </div>
    );
};

export default OurTeam;