const Movies = ({data}) => {
    
    let actorString = ""
    for (let i = 0; i < data.actors.length; i++) {
        actorString = actorString + data.actors[i] + ", " 
    }

    return (

        <>

            <div class="container">
                <div class="row">
                    <div class="col" >

                    </div>
                    <div class="col-8" >
                        <div>
                            <img src={data.images[0]}
                                alt="batman" />
                        </div>
                        <div>
                            <div>
                                Film title: {data.title}
                            </div>
                            <div>
                                Cast: {actorString}
                            </div>
                            <div>
                                Director: {data.director}
                            </div>
                        </div>
                    </div>
                    <div class="col" >

                    </div>
                </div>
            </div>


        </>

    );
}

export default Movies;