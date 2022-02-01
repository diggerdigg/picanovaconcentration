import './Instructions.scss';

export default function Instructions(){
    return(
        <>
            <div className="instructions">
                <h1>Instructions.</h1>
                <h3>
                    To play the memory game, click the squares to flip them and reveal images. You can only flip two at a time. The goal is to match all the images hidden under the squares with their respective image pairs. The game is won when no more squares remain.
                </h3>
            </div>
        </>
    )
}