import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {retrieve, reset} from '../../actions/ciqual/show';
import { del, loading, error } from '../../actions/ciqual/delete';

class Show extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    retrieved: PropTypes.object,
    retrieve: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    deleteError: PropTypes.string,
    deleteLoading: PropTypes.bool.isRequired,
    deleted: PropTypes.object,
    del: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.retrieve(decodeURIComponent(this.props.match.params.id));
  }

  componentWillUnmount() {
    this.props.reset();
  }

  del = () => {
    if (window.confirm('Are you sure you want to delete this item?')) this.props.del(this.props.retrieved);
  };

  render() {
    if (this.props.deleted) return <Redirect to=".."/>;

    const item = this.props.retrieved;

    return (<div>
      <h1>Show {item && item['@id']}</h1>

      {this.props.loading && <div className="alert alert-info" role="status">Loading...</div>}
      {this.props.error && <div className="alert alert-danger" role="alert"><span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> {this.props.error}</div>}
      {this.props.deleteError && <div className="alert alert-danger" role="alert"><span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> {this.props.deleteError}</div>}

      {item && <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>{item['id']}</td>
            </tr>
            <tr>
              <td>origgpcd</td>
              <td>{item['origgpcd']}</td>
            </tr>
            <tr>
              <td>origgpfr</td>
              <td>{item['origgpfr']}</td>
            </tr>
            <tr>
              <td>origfdcd</td>
              <td>{item['origfdcd']}</td>
            </tr>
            <tr>
              <td>origfdnm</td>
              <td>{item['origfdnm']}</td>
            </tr>
            <tr>
              <td>energieReglementUeNum11692011Kj100g</td>
              <td>{item['energieReglementUeNum11692011Kj100g']}</td>
            </tr>
            <tr>
              <td>energieReglementUeNum11692011Kcal100g</td>
              <td>{item['energieReglementUeNum11692011Kcal100g']}</td>
            </tr>
            <tr>
              <td>energieNXFacteurJonesAvecFibresKj100g</td>
              <td>{item['energieNXFacteurJonesAvecFibresKj100g']}</td>
            </tr>
            <tr>
              <td>energieNXFacteurJonesAvecFibresKcal100g</td>
              <td>{item['energieNXFacteurJonesAvecFibresKcal100g']}</td>
            </tr>
            <tr>
              <td>eauG100g</td>
              <td>{item['eauG100g']}</td>
            </tr>
            <tr>
              <td>proteinesG100g</td>
              <td>{item['proteinesG100g']}</td>
            </tr>
            <tr>
              <td>proteinesBrutesNX625G100g</td>
              <td>{item['proteinesBrutesNX625G100g']}</td>
            </tr>
            <tr>
              <td>glucidesG100g</td>
              <td>{item['glucidesG100g']}</td>
            </tr>
            <tr>
              <td>lipidesG100g</td>
              <td>{item['lipidesG100g']}</td>
            </tr>
            <tr>
              <td>sucresG100g</td>
              <td>{item['sucresG100g']}</td>
            </tr>
            <tr>
              <td>amidonG100g</td>
              <td>{item['amidonG100g']}</td>
            </tr>
            <tr>
              <td>fibresAlimentairesG100g</td>
              <td>{item['fibresAlimentairesG100g']}</td>
            </tr>
            <tr>
              <td>polyolsTotauxG100g</td>
              <td>{item['polyolsTotauxG100g']}</td>
            </tr>
            <tr>
              <td>cendresG100g</td>
              <td>{item['cendresG100g']}</td>
            </tr>
            <tr>
              <td>alcoolG100g</td>
              <td>{item['alcoolG100g']}</td>
            </tr>
            <tr>
              <td>acidesOrganiquesG100g</td>
              <td>{item['acidesOrganiquesG100g']}</td>
            </tr>
            <tr>
              <td>agSaturesG100g</td>
              <td>{item['agSaturesG100g']}</td>
            </tr>
            <tr>
              <td>agMonoinsaturesG100g</td>
              <td>{item['agMonoinsaturesG100g']}</td>
            </tr>
            <tr>
              <td>agPolyinsaturesG100g</td>
              <td>{item['agPolyinsaturesG100g']}</td>
            </tr>
            <tr>
              <td>ag40ButyriqueG100g</td>
              <td>{item['ag40ButyriqueG100g']}</td>
            </tr>
            <tr>
              <td>ag60CaproiqueG100g</td>
              <td>{item['ag60CaproiqueG100g']}</td>
            </tr>
            <tr>
              <td>ag80CapryliqueG100g</td>
              <td>{item['ag80CapryliqueG100g']}</td>
            </tr>
            <tr>
              <td>ag100CapriqueG100g</td>
              <td>{item['ag100CapriqueG100g']}</td>
            </tr>
            <tr>
              <td>ag120LauriqueG100g</td>
              <td>{item['ag120LauriqueG100g']}</td>
            </tr>
            <tr>
              <td>ag140MyristiqueG100g</td>
              <td>{item['ag140MyristiqueG100g']}</td>
            </tr>
            <tr>
              <td>ag160PalmitiqueG100g</td>
              <td>{item['ag160PalmitiqueG100g']}</td>
            </tr>
            <tr>
              <td>ag180SteariqueG100g</td>
              <td>{item['ag180SteariqueG100g']}</td>
            </tr>
            <tr>
              <td>ag1819cN9OleiqueG100g</td>
              <td>{item['ag1819cN9OleiqueG100g']}</td>
            </tr>
            <tr>
              <td>ag1829c12cN6LinoleiqueG100g</td>
              <td>{item['ag1829c12cN6LinoleiqueG100g']}</td>
            </tr>
            <tr>
              <td>ag183C9c12c15N3AlphalinoleniqueG100g</td>
              <td>{item['ag183C9c12c15N3AlphalinoleniqueG100g']}</td>
            </tr>
            <tr>
              <td>ag2045c8c11c14cN6ArachidoniqueG100g</td>
              <td>{item['ag2045c8c11c14cN6ArachidoniqueG100g']}</td>
            </tr>
            <tr>
              <td>ag2055c8c11c14c17cN3EpaG100g</td>
              <td>{item['ag2055c8c11c14c17cN3EpaG100g']}</td>
            </tr>
            <tr>
              <td>ag2264c7c10c13c16c19cN3DhaG100g</td>
              <td>{item['ag2264c7c10c13c16c19cN3DhaG100g']}</td>
            </tr>
            <tr>
              <td>cholesterolMg100g</td>
              <td>{item['cholesterolMg100g']}</td>
            </tr>
            <tr>
              <td>selChlorureDeSodiumG100g</td>
              <td>{item['selChlorureDeSodiumG100g']}</td>
            </tr>
            <tr>
              <td>calciumMg100g</td>
              <td>{item['calciumMg100g']}</td>
            </tr>
            <tr>
              <td>chlorureMg100g</td>
              <td>{item['chlorureMg100g']}</td>
            </tr>
            <tr>
              <td>cuivreMg100g</td>
              <td>{item['cuivreMg100g']}</td>
            </tr>
            <tr>
              <td>ferMg100g</td>
              <td>{item['ferMg100g']}</td>
            </tr>
            <tr>
              <td>iodeMicrog100g</td>
              <td>{item['iodeMicrog100g']}</td>
            </tr>
            <tr>
              <td>magnesiumMg100g</td>
              <td>{item['magnesiumMg100g']}</td>
            </tr>
            <tr>
              <td>manganeseMg100g</td>
              <td>{item['manganeseMg100g']}</td>
            </tr>
            <tr>
              <td>phosphoreMg100g</td>
              <td>{item['phosphoreMg100g']}</td>
            </tr>
            <tr>
              <td>potassiumMg100g</td>
              <td>{item['potassiumMg100g']}</td>
            </tr>
            <tr>
              <td>seleniumMicrog100g</td>
              <td>{item['seleniumMicrog100g']}</td>
            </tr>
            <tr>
              <td>sodiumMg100g</td>
              <td>{item['sodiumMg100g']}</td>
            </tr>
            <tr>
              <td>zincMg100g</td>
              <td>{item['zincMg100g']}</td>
            </tr>
            <tr>
              <td>retinolMicrog100g</td>
              <td>{item['retinolMicrog100g']}</td>
            </tr>
            <tr>
              <td>betacaroteneMicrog100g</td>
              <td>{item['betacaroteneMicrog100g']}</td>
            </tr>
            <tr>
              <td>vitamineDMicrog100g</td>
              <td>{item['vitamineDMicrog100g']}</td>
            </tr>
            <tr>
              <td>vitamineEMg100g</td>
              <td>{item['vitamineEMg100g']}</td>
            </tr>
            <tr>
              <td>vitamineK1Microg100g</td>
              <td>{item['vitamineK1Microg100g']}</td>
            </tr>
            <tr>
              <td>vitamineK2Microg100g</td>
              <td>{item['vitamineK2Microg100g']}</td>
            </tr>
            <tr>
              <td>vitamineCMg100g</td>
              <td>{item['vitamineCMg100g']}</td>
            </tr>
            <tr>
              <td>vitamineB1OuThiamineMg100g</td>
              <td>{item['vitamineB1OuThiamineMg100g']}</td>
            </tr>
            <tr>
              <td>vitamineB2OuRiboflavineMg100g</td>
              <td>{item['vitamineB2OuRiboflavineMg100g']}</td>
            </tr>
            <tr>
              <td>vitamineB3OuPpOuNiacineMg100g</td>
              <td>{item['vitamineB3OuPpOuNiacineMg100g']}</td>
            </tr>
            <tr>
              <td>vitamineB5OuAcidePantotheniqueMg100g</td>
              <td>{item['vitamineB5OuAcidePantotheniqueMg100g']}</td>
            </tr>
            <tr>
              <td>vitamineB6Mg100g</td>
              <td>{item['vitamineB6Mg100g']}</td>
            </tr>
            <tr>
              <td>vitamineB9OuFolatesTotauxMicrog100g</td>
              <td>{item['vitamineB9OuFolatesTotauxMicrog100g']}</td>
            </tr>
            <tr>
              <td>vitamineB12Microg100g</td>
              <td>{item['vitamineB12Microg100g']}</td>
            </tr>
          </tbody>
        </table>
      </div>
      }
      <Link to=".." className="btn btn-default">Back to list</Link>
      {item && <Link to={`/ciquals/edit/${encodeURIComponent(item['@id'])}`}>
        <button className="btn btn-warning">Edit</button>
        </Link>
      }
      <button onClick={this.del} className="btn btn-danger">Delete</button>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.ciqual.show.error,
    loading: state.ciqual.show.loading,
    retrieved:state.ciqual.show.retrieved,
    deleteError: state.ciqual.del.error,
    deleteLoading: state.ciqual.del.loading,
    deleted: state.ciqual.del.deleted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrieve: id => dispatch(retrieve(id)),
    del: item => dispatch(del(item)),
    reset: () => {
      dispatch(reset());
      dispatch(error(null));
      dispatch(loading(false));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
