
const Reviews = () => {
    return (
        <div className="mt-10" data-aos="fade-up">
            <h2 className="text-2xl font-bold tracking-tight text-center">
                Read trusted reviews from our customers
            </h2>
            <div className="mx-auto max-w-screen-2xl px-4 py-12">
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <blockquote
                        className="flex h-full flex-col justify-between border-2 p-6 shadow-sm sm:p-8"
                    >
                        <div>
                            <div className="mt-4">
                                <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                                    Stayin' Alive
                                </p>

                                <p className="mt-4 leading-relaxed text-black">
                                    No, Rose, they are not breathing. And they have no arms or legs …
                                    Where are they? You know what? If we come across somebody with no
                                    arms or legs, do we bother resuscitating them? I mean, what
                                    quality of life do we have there?
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-black sm:mt-6">
                            &mdash; Michael Scott
                        </footer>
                    </blockquote>
                    <blockquote
                        className="flex h-full flex-col justify-between border-2 p-6 shadow-sm sm:p-8"
                    >
                        <div>
                            <div className="mt-4">
                                <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                                    Lia Desuja
                                </p>

                                <p className="mt-4 leading-relaxed text-black">
                                    No, Rose, they are not breathing. And they have no arms or legs …
                                    Where are they? You know what? If we come across somebody with no
                                    arms or legs, do we bother resuscitating them? I mean, what
                                    quality of life do we have there?
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-black sm:mt-6">
                            &mdash; Michael Scott
                        </footer>
                    </blockquote>
                    <blockquote
                        className="flex h-full flex-col justify-between border-2 p-6 shadow-sm sm:p-8"
                    >
                        <div>
                            <div className="mt-4">
                                <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                                    Stayin' Jas
                                </p>

                                <p className="mt-4 leading-relaxed text-black">
                                    No, Rose, they are not breathing. And they have no arms or legs …
                                    Where are they? You know what? If we come across somebody with no
                                    arms or legs, do we bother resuscitating them? I mean, what
                                    quality of life do we have there?
                                </p>
                            </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-black sm:mt-6">
                            &mdash; Michael Scott
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default Reviews;