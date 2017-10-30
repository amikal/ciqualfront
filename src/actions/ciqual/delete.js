import ciqualFetch from '../../api/ciqualFetch';

export function error(error) {
  return {type: 'CIQUAL_DELETE_ERROR', error};
}

export function loading(loading) {
  return {type: 'CIQUAL_DELETE_LOADING', loading};
}

export function success(deleted) {
  return {type: 'CIQUAL_DELETE_SUCCESS', deleted};
}

export function del(item) {
  return (dispatch) => {
    dispatch(loading(true));

    return ciqualFetch(item['@id'], {method: 'DELETE'})
      .then(() => {
        dispatch(loading(false));
        dispatch(success(item))
      })
      .catch(e => {
        dispatch(loading(false));
        dispatch(error(e.message))
      });
  };
}
