import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
  renderField(data) {
    const hasError = data.meta.touched && !!data.meta.error;
    if (hasError) {
      data.input['aria-describedby'] = `ciqual_${data.input.name}_helpBlock`;
      data.input['aria-invalid'] = true;
    }

    return <div className={`form-group${hasError ? ' has-error' : ''}`}>
      <label htmlFor={`ciqual_${data.input.name}`} className="control-label">{data.input.name}</label>
      <input {...data.input} type={data.type} step={data.step} required={data.required} placeholder={data.placeholder} id={`ciqual_${data.input.name}`} className="form-control"/>
      {hasError && <span className="help-block" id={`ciqual_${data.input.name}_helpBlock`}>{data.meta.error}</span>}
    </div>;
  }

  render() {
    const { handleSubmit } = this.props;

    return <form onSubmit={handleSubmit}>
      <Field component={this.renderField} name="id" type="number" placeholder="" />
      <Field component={this.renderField} name="origgpcd" type="text" placeholder="" />
      <Field component={this.renderField} name="origgpfr" type="text" placeholder="" />
      <Field component={this.renderField} name="origfdcd" type="text" placeholder="" />
      <Field component={this.renderField} name="origfdnm" type="text" placeholder="" />
      <Field component={this.renderField} name="energieReglementUeNum11692011Kj100g" type="text" placeholder="" />
      <Field component={this.renderField} name="energieReglementUeNum11692011Kcal100g" type="text" placeholder="" />
      <Field component={this.renderField} name="energieNXFacteurJonesAvecFibresKj100g" type="text" placeholder="" />
      <Field component={this.renderField} name="energieNXFacteurJonesAvecFibresKcal100g" type="text" placeholder="" />
      <Field component={this.renderField} name="eauG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="proteinesG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="proteinesBrutesNX625G100g" type="text" placeholder="" />
      <Field component={this.renderField} name="glucidesG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="lipidesG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="sucresG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="amidonG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="fibresAlimentairesG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="polyolsTotauxG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="cendresG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="alcoolG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="acidesOrganiquesG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="agSaturesG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="agMonoinsaturesG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="agPolyinsaturesG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ag40ButyriqueG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ag60CaproiqueG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ag80CapryliqueG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ag100CapriqueG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ag120LauriqueG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ag140MyristiqueG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ag160PalmitiqueG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ag180SteariqueG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ag1819cN9OleiqueG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ag1829c12cN6LinoleiqueG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ag183C9c12c15N3AlphalinoleniqueG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ag2045c8c11c14cN6ArachidoniqueG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ag2055c8c11c14c17cN3EpaG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ag2264c7c10c13c16c19cN3DhaG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="cholesterolMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="selChlorureDeSodiumG100g" type="text" placeholder="" />
      <Field component={this.renderField} name="calciumMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="chlorureMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="cuivreMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="ferMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="iodeMicrog100g" type="text" placeholder="" />
      <Field component={this.renderField} name="magnesiumMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="manganeseMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="phosphoreMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="potassiumMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="seleniumMicrog100g" type="text" placeholder="" />
      <Field component={this.renderField} name="sodiumMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="zincMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="retinolMicrog100g" type="text" placeholder="" />
      <Field component={this.renderField} name="betacaroteneMicrog100g" type="text" placeholder="" />
      <Field component={this.renderField} name="vitamineDMicrog100g" type="text" placeholder="" />
      <Field component={this.renderField} name="vitamineEMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="vitamineK1Microg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="vitamineK2Microg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="vitamineCMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="vitamineB1OuThiamineMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="vitamineB2OuRiboflavineMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="vitamineB3OuPpOuNiacineMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="vitamineB5OuAcidePantotheniqueMg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="vitamineB6Mg100g" type="text" placeholder="" />
      <Field component={this.renderField} name="vitamineB9OuFolatesTotauxMicrog100g" type="text" placeholder="" />
      <Field component={this.renderField} name="vitamineB12Microg100g" type="text" placeholder="" />

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>;
  }
}

export default reduxForm({form: 'ciqual', enableReinitialize: true, keepDirtyOnReinitialize: true})(Form);
