import './App.css';

const CarComponent = props => {
    console.log(props);
    return (
        <div className='transit'>
            <h3>{props.vehicle.make}</h3>
            <h3>{props.vehicle.model}</h3>
            <h4>{props.vehicle.year} | {props.vehicle.type}</h4>
        </div>
    );
};

export default CarComponent; 