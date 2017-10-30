import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link,withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { list, reset } from '../../actions/ciqual/list';
import { success } from '../../actions/ciqual/delete';
import { itemToLinks } from '../../utils/helpers';

class List extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    deletedItem: PropTypes.object,
    list: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.list(this.props.match.params.page && decodeURIComponent(this.props.match.params.page));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.page !== nextProps.match.params.page) nextProps.list(nextProps.match.params.page && decodeURIComponent(nextProps.match.params.page));
  }

  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    return <div>
      <h1>Ciqual List</h1>

      {this.props.loading && <div className="alert alert-info">Loading...</div>}
      {this.props.deletedItem && <div className="alert alert-success">{this.props.deletedItem['@id']} deleted.</div>}
      {this.props.error && <div className="alert alert-danger">{this.props.error}</div>}

      <div className="table-responsive">
          <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>id</th>
              <th>origgpcd</th>
              <th>origgpfr</th>
              <th>origfdcd</th>
              <th>origfdnm</th>
              <th>energieReglementUeNum11692011Kj100g</th>
              <th>energieReglementUeNum11692011Kcal100g</th>
              <th>energieNXFacteurJonesAvecFibresKj100g</th>
              <th>energieNXFacteurJonesAvecFibresKcal100g</th>
              <th>eauG100g</th>
              <th>proteinesG100g</th>
              <th>proteinesBrutesNX625G100g</th>
              <th>glucidesG100g</th>
              <th>lipidesG100g</th>
              <th>sucresG100g</th>
              <th>amidonG100g</th>
              <th>fibresAlimentairesG100g</th>
              <th>polyolsTotauxG100g</th>
              <th>cendresG100g</th>
              <th>alcoolG100g</th>
              <th>acidesOrganiquesG100g</th>
              <th>agSaturesG100g</th>
              <th>agMonoinsaturesG100g</th>
              <th>agPolyinsaturesG100g</th>
              <th>ag40ButyriqueG100g</th>
              <th>ag60CaproiqueG100g</th>
              <th>ag80CapryliqueG100g</th>
              <th>ag100CapriqueG100g</th>
              <th>ag120LauriqueG100g</th>
              <th>ag140MyristiqueG100g</th>
              <th>ag160PalmitiqueG100g</th>
              <th>ag180SteariqueG100g</th>
              <th>ag1819cN9OleiqueG100g</th>
              <th>ag1829c12cN6LinoleiqueG100g</th>
              <th>ag183C9c12c15N3AlphalinoleniqueG100g</th>
              <th>ag2045c8c11c14cN6ArachidoniqueG100g</th>
              <th>ag2055c8c11c14c17cN3EpaG100g</th>
              <th>ag2264c7c10c13c16c19cN3DhaG100g</th>
              <th>cholesterolMg100g</th>
              <th>selChlorureDeSodiumG100g</th>
              <th>calciumMg100g</th>
              <th>chlorureMg100g</th>
              <th>cuivreMg100g</th>
              <th>ferMg100g</th>
              <th>iodeMicrog100g</th>
              <th>magnesiumMg100g</th>
              <th>manganeseMg100g</th>
              <th>phosphoreMg100g</th>
              <th>potassiumMg100g</th>
              <th>seleniumMicrog100g</th>
              <th>sodiumMg100g</th>
              <th>zincMg100g</th>
              <th>retinolMicrog100g</th>
              <th>betacaroteneMicrog100g</th>
              <th>vitamineDMicrog100g</th>
              <th>vitamineEMg100g</th>
              <th>vitamineK1Microg100g</th>
              <th>vitamineK2Microg100g</th>
              <th>vitamineCMg100g</th>
              <th>vitamineB1OuThiamineMg100g</th>
              <th>vitamineB2OuRiboflavineMg100g</th>
              <th>vitamineB3OuPpOuNiacineMg100g</th>
              <th>vitamineB5OuAcidePantotheniqueMg100g</th>
              <th>vitamineB6Mg100g</th>
              <th>vitamineB9OuFolatesTotauxMicrog100g</th>
              <th>vitamineB12Microg100g</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {this.props.data['hydra:member'] && this.props.data['hydra:member'].map(item =>
            <tr className={item['@id']} key={item['@id']}>
              <td><Link to={`/show/${item['id']}`}>{item['@id']}</Link></td>
              <td>{item['id'] ? itemToLinks(item['id']) : ''}</td>
              <td>{item['origgpcd'] ? itemToLinks(item['origgpcd']) : ''}</td>
              <td>{item['origgpfr'] ? itemToLinks(item['origgpfr']) : ''}</td>
              <td>{item['origfdcd'] ? itemToLinks(item['origfdcd']) : ''}</td>
              <td>{item['origfdnm'] ? itemToLinks(item['origfdnm']) : ''}</td>
              <td>{item['energieReglementUeNum11692011Kj100g'] ? itemToLinks(item['energieReglementUeNum11692011Kj100g']) : ''}</td>
              <td>{item['energieReglementUeNum11692011Kcal100g'] ? itemToLinks(item['energieReglementUeNum11692011Kcal100g']) : ''}</td>
              <td>{item['energieNXFacteurJonesAvecFibresKj100g'] ? itemToLinks(item['energieNXFacteurJonesAvecFibresKj100g']) : ''}</td>
              <td>{item['energieNXFacteurJonesAvecFibresKcal100g'] ? itemToLinks(item['energieNXFacteurJonesAvecFibresKcal100g']) : ''}</td>
              <td>{item['eauG100g'] ? itemToLinks(item['eauG100g']) : ''}</td>
              <td>{item['proteinesG100g'] ? itemToLinks(item['proteinesG100g']) : ''}</td>
              <td>{item['proteinesBrutesNX625G100g'] ? itemToLinks(item['proteinesBrutesNX625G100g']) : ''}</td>
              <td>{item['glucidesG100g'] ? itemToLinks(item['glucidesG100g']) : ''}</td>
              <td>{item['lipidesG100g'] ? itemToLinks(item['lipidesG100g']) : ''}</td>
              <td>{item['sucresG100g'] ? itemToLinks(item['sucresG100g']) : ''}</td>
              <td>{item['amidonG100g'] ? itemToLinks(item['amidonG100g']) : ''}</td>
              <td>{item['fibresAlimentairesG100g'] ? itemToLinks(item['fibresAlimentairesG100g']) : ''}</td>
              <td>{item['polyolsTotauxG100g'] ? itemToLinks(item['polyolsTotauxG100g']) : ''}</td>
              <td>{item['cendresG100g'] ? itemToLinks(item['cendresG100g']) : ''}</td>
              <td>{item['alcoolG100g'] ? itemToLinks(item['alcoolG100g']) : ''}</td>
              <td>{item['acidesOrganiquesG100g'] ? itemToLinks(item['acidesOrganiquesG100g']) : ''}</td>
              <td>{item['agSaturesG100g'] ? itemToLinks(item['agSaturesG100g']) : ''}</td>
              <td>{item['agMonoinsaturesG100g'] ? itemToLinks(item['agMonoinsaturesG100g']) : ''}</td>
              <td>{item['agPolyinsaturesG100g'] ? itemToLinks(item['agPolyinsaturesG100g']) : ''}</td>
              <td>{item['ag40ButyriqueG100g'] ? itemToLinks(item['ag40ButyriqueG100g']) : ''}</td>
              <td>{item['ag60CaproiqueG100g'] ? itemToLinks(item['ag60CaproiqueG100g']) : ''}</td>
              <td>{item['ag80CapryliqueG100g'] ? itemToLinks(item['ag80CapryliqueG100g']) : ''}</td>
              <td>{item['ag100CapriqueG100g'] ? itemToLinks(item['ag100CapriqueG100g']) : ''}</td>
              <td>{item['ag120LauriqueG100g'] ? itemToLinks(item['ag120LauriqueG100g']) : ''}</td>
              <td>{item['ag140MyristiqueG100g'] ? itemToLinks(item['ag140MyristiqueG100g']) : ''}</td>
              <td>{item['ag160PalmitiqueG100g'] ? itemToLinks(item['ag160PalmitiqueG100g']) : ''}</td>
              <td>{item['ag180SteariqueG100g'] ? itemToLinks(item['ag180SteariqueG100g']) : ''}</td>
              <td>{item['ag1819cN9OleiqueG100g'] ? itemToLinks(item['ag1819cN9OleiqueG100g']) : ''}</td>
              <td>{item['ag1829c12cN6LinoleiqueG100g'] ? itemToLinks(item['ag1829c12cN6LinoleiqueG100g']) : ''}</td>
              <td>{item['ag183C9c12c15N3AlphalinoleniqueG100g'] ? itemToLinks(item['ag183C9c12c15N3AlphalinoleniqueG100g']) : ''}</td>
              <td>{item['ag2045c8c11c14cN6ArachidoniqueG100g'] ? itemToLinks(item['ag2045c8c11c14cN6ArachidoniqueG100g']) : ''}</td>
              <td>{item['ag2055c8c11c14c17cN3EpaG100g'] ? itemToLinks(item['ag2055c8c11c14c17cN3EpaG100g']) : ''}</td>
              <td>{item['ag2264c7c10c13c16c19cN3DhaG100g'] ? itemToLinks(item['ag2264c7c10c13c16c19cN3DhaG100g']) : ''}</td>
              <td>{item['cholesterolMg100g'] ? itemToLinks(item['cholesterolMg100g']) : ''}</td>
              <td>{item['selChlorureDeSodiumG100g'] ? itemToLinks(item['selChlorureDeSodiumG100g']) : ''}</td>
              <td>{item['calciumMg100g'] ? itemToLinks(item['calciumMg100g']) : ''}</td>
              <td>{item['chlorureMg100g'] ? itemToLinks(item['chlorureMg100g']) : ''}</td>
              <td>{item['cuivreMg100g'] ? itemToLinks(item['cuivreMg100g']) : ''}</td>
              <td>{item['ferMg100g'] ? itemToLinks(item['ferMg100g']) : ''}</td>
              <td>{item['iodeMicrog100g'] ? itemToLinks(item['iodeMicrog100g']) : ''}</td>
              <td>{item['magnesiumMg100g'] ? itemToLinks(item['magnesiumMg100g']) : ''}</td>
              <td>{item['manganeseMg100g'] ? itemToLinks(item['manganeseMg100g']) : ''}</td>
              <td>{item['phosphoreMg100g'] ? itemToLinks(item['phosphoreMg100g']) : ''}</td>
              <td>{item['potassiumMg100g'] ? itemToLinks(item['potassiumMg100g']) : ''}</td>
              <td>{item['seleniumMicrog100g'] ? itemToLinks(item['seleniumMicrog100g']) : ''}</td>
              <td>{item['sodiumMg100g'] ? itemToLinks(item['sodiumMg100g']) : ''}</td>
              <td>{item['zincMg100g'] ? itemToLinks(item['zincMg100g']) : ''}</td>
              <td>{item['retinolMicrog100g'] ? itemToLinks(item['retinolMicrog100g']) : ''}</td>
              <td>{item['betacaroteneMicrog100g'] ? itemToLinks(item['betacaroteneMicrog100g']) : ''}</td>
              <td>{item['vitamineDMicrog100g'] ? itemToLinks(item['vitamineDMicrog100g']) : ''}</td>
              <td>{item['vitamineEMg100g'] ? itemToLinks(item['vitamineEMg100g']) : ''}</td>
              <td>{item['vitamineK1Microg100g'] ? itemToLinks(item['vitamineK1Microg100g']) : ''}</td>
              <td>{item['vitamineK2Microg100g'] ? itemToLinks(item['vitamineK2Microg100g']) : ''}</td>
              <td>{item['vitamineCMg100g'] ? itemToLinks(item['vitamineCMg100g']) : ''}</td>
              <td>{item['vitamineB1OuThiamineMg100g'] ? itemToLinks(item['vitamineB1OuThiamineMg100g']) : ''}</td>
              <td>{item['vitamineB2OuRiboflavineMg100g'] ? itemToLinks(item['vitamineB2OuRiboflavineMg100g']) : ''}</td>
              <td>{item['vitamineB3OuPpOuNiacineMg100g'] ? itemToLinks(item['vitamineB3OuPpOuNiacineMg100g']) : ''}</td>
              <td>{item['vitamineB5OuAcidePantotheniqueMg100g'] ? itemToLinks(item['vitamineB5OuAcidePantotheniqueMg100g']) : ''}</td>
              <td>{item['vitamineB6Mg100g'] ? itemToLinks(item['vitamineB6Mg100g']) : ''}</td>
              <td>{item['vitamineB9OuFolatesTotauxMicrog100g'] ? itemToLinks(item['vitamineB9OuFolatesTotauxMicrog100g']) : ''}</td>
              <td>{item['vitamineB12Microg100g'] ? itemToLinks(item['vitamineB12Microg100g']) : ''}</td>
              <td>
                <Link to={`/show/${item['id']}`}>
                  <span className="glyphicon glyphicon-search" aria-hidden="true"/>
                  <span className="sr-only">Show</span>
                </Link>
              </td>
              <td>
                <Link to={`/edit/${item['id']}`}>
                  <span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
                  <span className="sr-only">Edit</span>
                </Link>
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>

      {this.pagination()}
    </div>;
  }

  pagination() {
    const view = this.props.data['hydra:view'];
    if (!view) return;

    const {'hydra:first': first, 'hydra:previous': previous,'hydra:next': next, 'hydra:last': last} = view;

    return <nav aria-label="Page navigation">
        <Link to='.' className={`btn btn-default${previous ? '' : ' disabled'}`}><span aria-hidden="true">&lArr;</span> First</Link>
        <Link to={!previous || previous === first ? '.' : encodeURIComponent(previous)} className={`btn btn-default${previous ? '' : ' disabled'}`}><span aria-hidden="true">&larr;</span> Previous</Link>
        <Link to={next ? encodeURIComponent(next) : '#'} className={`btn btn-default${next ? '' : ' disabled'}`}>Next <span aria-hidden="true">&rarr;</span></Link>
        <Link to={last ? encodeURIComponent(last) : '#'} className={`btn btn-default${next ? '' : ' disabled'}`}>Last <span aria-hidden="true">&rArr;</span></Link>
    </nav>;
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.ciqual.list.data,
    error: state.ciqual.list.error,
    loading: state.ciqual.list.loading,
    deletedItem: state.ciqual.del.deleted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    list: (page) => dispatch(list(page)),
    reset: () => {
      dispatch(reset());
      dispatch(success(null));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
