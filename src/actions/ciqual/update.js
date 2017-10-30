import { SubmissionError } from 'redux-form';
import ciqualFetch from '../../api/ciqualFetch';
import { success as createSuccess } from './create';

export function retrieveError(retrieveError) {
  return {type: 'CIQUAL_UPDATE_RETRIEVE_ERROR', retrieveError};
}

export function retrieveLoading(retrieveLoading) {
  return {type: 'CIQUAL_UPDATE_RETRIEVE_LOADING', retrieveLoading};
}

export function retrieveSuccess(retrieved) {
  return {type: 'CIQUAL_UPDATE_RETRIEVE_SUCCESS', retrieved};
}

export function retrieve(id) {
  return (dispatch) => {
    dispatch(retrieveLoading(true));

    return ciqualFetch(id)
      .then(response => response.json())
      .then(data => {
        dispatch(retrieveLoading(false));
        dispatch(retrieveSuccess(data));
      })
      .catch(e => {
        dispatch(retrieveLoading(false));
        dispatch(retrieveError(e.message));
      });
  };
}

export function updateError(updateError) {
  return {type: 'CIQUAL_UPDATE_UPDATE_ERROR', updateError};
}

export function updateLoading(updateLoading) {
  return {type: 'CIQUAL_UPDATE_UPDATE_LOADING', updateLoading};
}

export function updateSuccess(updated) {
  return {type: 'CIQUAL_UPDATE_UPDATE_SUCCESS', updated};
}

export function update(item, values) {
  return (dispatch) => {
    dispatch(updateError(null));
    dispatch(createSuccess(null));
    dispatch(updateLoading(true));

    return ciqualFetch(item['@id'], {
        method: 'PUT',
        headers: new Headers({'Content-Type': 'application/ld+json'}),
        body: JSON.stringify(values),
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch(updateLoading(false));
        dispatch(updateSuccess(data));
      })
      .catch(e => {
        dispatch(updateLoading(false));

        if (e instanceof SubmissionError) {
          dispatch(updateError(e.errors._error));
          throw e;
        }

        dispatch(updateError(e.message));
      });
  };
}

export function reset() {
  return {type: 'CIQUAL_UPDATE_RESET'};
}
