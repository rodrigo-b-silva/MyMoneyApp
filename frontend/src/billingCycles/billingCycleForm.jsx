import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import { init } from './billingCyclesActions'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

    calculateSummary(){
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebits: this.props.debits.map(d => +d.value || 0).reduce(sum)
        }
    }

    render(){
        const { handleSubmit, readOnly, credits, debits } = this.props
        const { sumOfCredits, sumOfDebits } = this.calculateSummary()
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field 
                        name="name" 
                        component={labelAndInput} 
                        label="Nome" 
                        cols="12 4" 
                        readOnly={readOnly}
                        placeholder="Informe o nome" />
                    <Field 
                        name="month" 
                        component={labelAndInput} 
                        label="Mês" 
                        cols="12 4" 
                        readOnly={readOnly}
                        placeholder="Informe o mês" />
                    <Field 
                        name="year" 
                        component={labelAndInput} 
                        label="Ano" 
                        cols="12 4" 
                        readOnly={readOnly}
                        placeholder="Informe o ano" />
                    <Summary credit={sumOfCredits} debit={sumOfDebits}/>
                    <ItemList list={credits} cols="12 6" readOnly={readOnly}
                        field="credits" legend="Créditos"/>
                    <ItemList list={debits} cols="12 6" readOnly={readOnly}
                        field="debits" legend="Débitos" showStatus={true}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )  
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({ 
    credits: selector(state, 'credits'),
    debits: selector(state, 'debits')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)