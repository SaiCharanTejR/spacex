import React from 'react';

const ProductCard = (props) => {
    return (
        <div className="col-3 cardLayout">
            <div className="ProgramList">
                <div className="pgmLogo">
                    <img src={props.links.mission_patch_small} alt="pgm logo" />
                </div>
                <div className="text-content">
                    <div className="pgmHead">{`${props.mission_name} #${props.flight_number}`}</div>
                    <div>
                        <span className="subHead">Mission IDs :</span>
                        <span>{props.mission_id.map(e => <li>{e}</li>)}</span>
                    </div>
                    <div>
                        <span className="subHead">Launch year :</span>
                        <span>{props.launch_year}</span>
                    </div>
                    <div>
                        <span className="subHead">Successful launch:</span>
                        <span>{props.launch_success}</span>
                    </div>
                    <div>
                        <span className="subHead">Successful Landing:</span>
                        <span>{props.rocket.first_stage.cores[0].land_success}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;