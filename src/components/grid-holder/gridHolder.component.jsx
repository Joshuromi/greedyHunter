import "./gridHolder.style.scss";

const GridHolder = ({ totalGrid, grid }) => {
    const square = (grid * 50) + 6;
    return (
        <div className="grid-box" style={{ width: `${square}px` }}>
            {
                Array.from(Array(totalGrid), (i) => (
                    <div className="box" key={i}></div>
                ))
            }
        </div>
    )
}

export default GridHolder;