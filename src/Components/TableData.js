import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    
    deleteButtonClick = (idUser) =>{
        this.props.deleteUser(idUser);        
    }
    mappingDataUser = ()=>
        this.props.dataUserProps.map((value,key) =>(
            <TableDataRow  

                deleteButtonClick = {(idUser) =>this.deleteButtonClick(idUser)}

                changeEditUserStatus = {()=>this.props.changeEditUserStatus()}
                editFunClick={(user) => this.props.editFun(value)} 
                userName={value.name} 
                key={key} 
                stt={key} 
                tel={value.tel} 
                id={value.id} 
                permission={value.Permission}>
                
            </TableDataRow>
        ))
    

    render() {
        
        return (
            <div className="col">
                        <table className="table table-striped table table-hover">
                        <thead className="thead-inverse">
                            <tr>
                                <th>STT</th>
                                <th>TÊN</th>
                                <th>ĐIỆN THOẠI</th>
                                <th>QUYỀN</th>
                                <th>THAO TÁC</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.mappingDataUser()}
                            
                        </tbody>
                        </table>
                    </div>
                
            
        );
    }
}

export default TableData;