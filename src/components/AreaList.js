import React from 'react';
import PropTypes from 'prop-types';
import './styles/AreaList.css';

const AreaList = (props) => {
    return (
        <ul className='area-labels'>
            {props.areas.map((area) => {
                let classes = 'area-label-item';
                if (area.id === props.currentAreaId) {
                    classes += ' underlined';
                }
                return (
                    <li
                        className={classes}
                        dataid={area.id}
                        onClick={props.fetchAreaData}
                        key={area.id}
                    >
                        <span className='area-cls'>{area.name}</span>
                    </li>
                );				
            })}
        </ul>
    );
};

AreaList.propTypes = {
    fetchAreaData: PropTypes.func.isRequired,
    areas: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            frequencies: PropTypes.array
        })
    ),
    currentAreaId: PropTypes.number
}

export default AreaList;