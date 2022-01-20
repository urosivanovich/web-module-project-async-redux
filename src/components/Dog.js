import axios from 'axios';
import React, { useEffect} from 'react';
import { connect } from 'react-redux';

import { getDog } from '../actions';

const Dog = ({dog, isFetching, error, dispatch}) => {
console.log(dog)
    // useEffect(() => {
    //     dispatch(getDog())
    // }, [])

    if (error) {
        return <h2>We got an error: {error}</h2>;
      }
    
      if (isFetching) {
        return <h2>Fetching person for ya!</h2>;
      }

      const handleClick = () => {
          dispatch(getDog())
      }
    

    return(
        <>
        <div>
            <h2>Doggy dog</h2>
            <h4>{dog.status}</h4>
        </div>
        <button onClick={handleClick}>Get a new dog</button>
        </>
    )
}

const mapStateToProps = state => {
    return{
        dog: state.dog,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Dog);