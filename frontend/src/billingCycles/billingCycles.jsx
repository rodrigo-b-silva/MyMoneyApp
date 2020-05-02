import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabContent from '../common/tab/tabContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import List from './billingCycleList'
import Form from './billingCycleForm'

import { init, create, update, remove } from './billingCyclesActions'

class BillingCycle extends Component {

    componentWillMount(){
        this.props.init()
    }

    render(){
        return(
            <div>
                <ContentHeader title="Ciclos de pagamento" small="Cadastro"/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" target="tabList" icon="bars"/>
                            <TabHeader label="Incluir" target="tabCreate" icon="plus"/>
                            <TabHeader label="Alterar" target="tabUpdate" icon="pencil"/>
                            <TabHeader label="Excluir" target="tabDelete" icon="trash-o"/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <List />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Form onSubmit={this.props.create} 
                                    submitLabel="Incluir" submitClass="primary"/>
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <Form onSubmit={this.props.update}
                                    submitLabel="Alterar" submitClass="info"/>
                            </TabContent>
                            <TabContent id="tabDelete">
                                <Form onSubmit={this.props.remove} readOnly={true} 
                                    submitLabel="Excluir" submitClass="danger"/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update, remove }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)