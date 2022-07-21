// Code EyesOnMe Component Here

const handleBlur = () => {
    console.log('Hey! Eyes on me!')
}

const handleFocus = () => {
    console.log('Good!')
}



const EyesOnMe = () => {
    return (
        <div>
            <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe