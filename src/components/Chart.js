import React from 'react';
import PropTypes from 'prop-types';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

const Chart = (props) => {
    return (
        <div>
            <VictoryChart>
                <VictoryLine data={props.coordinates}
                    style={{
                        data: {
                            strokeWidth: 1
                        }
                    }}/>
                <VictoryAxis
                    tickCount={10}
                    style={{
                        tickLabels: { fontSize: 10 }
                    }}
                />
            </VictoryChart>
        </div>
    );
}

Chart.propTypes = {
    coordinates: PropTypes.array
};

export default Chart;
