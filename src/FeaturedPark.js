const FeaturedPark = (props) => {
    return (
        <div>
            <h2>This week our featured park is: {props.name}</h2>
            <button onClick={props.removeParkButton}>Click Here to remove this park</button>
        </div>
    )
}

export default FeaturedPark;