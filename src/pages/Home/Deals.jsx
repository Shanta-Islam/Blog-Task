
const Deals = () => {
    return (
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-2 p-2 mt-10">
            <div className="mx-auto relative">
                <img src="https://i.ibb.co/Mns0Pm7/dgt3-img-5.png" alt="" />
                <h3 className="absolute text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Super Sale <br />B&O Beoplay. Save $599.00</h3>
            </div>
            <div className="mx-auto relative">
                <img src="https://i.ibb.co/rmj79kp/dgt3-img-6.png" alt="" />
                <h3 className="absolute text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Deals Good <br />Cellphone Ultra. Save $199.00</h3>
            </div>
        </div>
    );
};

export default Deals;