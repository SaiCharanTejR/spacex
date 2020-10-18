import React from 'react';

const ProductCard = (props) => {
    return (
        <div class="col-3 cardLayout">
            <div class="ProgramList">
                <div class="pgmLogo">
                    <img src={props.links.mission_patch_small} alt="pgm logo" />
                </div>
                <div class="text-content">
                    <div class="pgmHead">{`${props.mission_name} #${props.flight_number}`}</div>
                    <div>
                        <span class="subHead">Mission IDs :</span>
                        <span>{props.mission_id.map(e => <li>{e}</li>)}</span>
                    </div>
                    <div>
                        <span class="subHead">Launch year :</span>
                        <span>{props.launch_year}</span>
                    </div>
                    <div>
                        <span class="subHead">Successful launch:</span>
                        <span>{props.launch_success ? 'True' : 'False'}</span>
                    </div>
                    <div>
                        <span class="subHead">Successful Landing:</span>
                        <span>{props.rocket.first_stage.cores[0].land_success ? 'True' : 'False'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;