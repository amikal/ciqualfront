import ciqualFetch from '../../api/ciqualFetch';

export function error(error) {
  return {type: 'CIQUAL_LIST_ERROR', error};
}

export function loading(loading) {
  return {type: 'CIQUAL_LIST_LOADING', loading};
}

export function success(items) {
  return {type: 'CIQUAL_LIST_SUCCESS', items};
}

export function view(items) {
  return { type: 'CIQUAL_LIST_VIEW', items};
}

export function page(page) {
  return (dispatch) => {
    dispatch(loading(true));
    dispatch(error(''));

    ciqualFetch(page)
      .then(response => response.json())
      .then(data => {
        dispatch(loading(false));
        dispatch(success(data['hydra:member']));
        dispatch(view(data['hydra:view']));
      })
      .catch(e => {
        dispatch(loading(false));
        dispatch(error(e.message))
      });
  };
}

export function list() {
  return page('/iquals');
}

export function reset() {
  return {type: 'CIQUAL_LIST_RESET'};
}
