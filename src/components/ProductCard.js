import React from 'react';

const ProductCard = (props) => {
    return (
        <div className="col-3 cardLayout" key={props.flight_number} >
            <div className="ProgramList">
                <div className="pgmLogo">
                    <img src={props.links.mission_patch_small ? props.links.mission_patch_small : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'} alt="pgm logo" />
                </div>
                <div className="text-content">
                    <div className="pgmHead">{`${props.mission_name} #${props.flight_number}`}</div>
                    <div>
                        <span className="subHead">Mission IDs :</span>
                        <span>{props.mission_id.map(e => <li>{e}</li>)}</span>
                    </div>
                    <div>
                        <span className="subHead">Launch year :</span>
                        <span data-testid="launch-year">{props.launch_year}</span>
                    </div>
                    <div>
                        <span className="subHead">Successful launch:</span>
                        <span data-testid="launch-element">{props.launch_success ? 'True' : 'False'}</span>
                    </div>
                    <div>
                        <span className="subHead">Successful Landing:</span>
                        <span data-testid="land-element">{props.rocket.first_stage.cores[0].land_success ? 'True' : 'False'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;