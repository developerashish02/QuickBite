const Shimmer = () => {
    const shimmerArray = new Array(12).fill(0);
    return (

        <div className="shimmer-container">
            {shimmerArray?.map((shimmerCard, index) => (
                <div className="shimmer-card" key={index} />
            ))}
        </div>

    );
};

export default Shimmer;
