import React, { Component } from 'react';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

const { v4: uuidv4 } = require('uuid');

class Content extends Component {
    constructor(props) {
        super(props);
        this.state={
            hienThiForm: false,
            data: DataUser,
            searchText: '',
            editUserStatus:false,
            userEditObject:{}
        }
    }
    changeEditUserStatus =()=>{
        this.setState({
            editUserStatus : !this.state.editUserStatus
        });
    }

    getUserEditInfoContent=(info)=>{
        this.state.data.forEach((value, key) => {
            if(value.id === info.id){
                value.name = info.name;
                value.tel = info.tel;
                value.Permission = info.Permission;
            
            }
        })
    }
    editUser= (user)=>{
        this.setState({
            userEditObject: user
        });
    }
    getNewUserData=(name, tel, Permission) =>{ 
        
        var item={};
        item.id=uuidv4();
        item.name=name;
        item.tel=tel;
        item.Permission=Permission;  
        var items=this.state.data;
        
        items.push(item);
        this.setState({
            data:items
        });
        
        
    }

    getTextSearch = (dl) =>{
        this.setState({
            searchText:dl
        });
       
    }

    
    doiTrangThai =()=>{
        this.setState({
            hienThiForm: !this.state.hienThiForm,
        });
    }
    deleteUser = (idUser) =>{
        //ham filter
        
        var tempData = this.state.data;
        tempData = tempData.filter(item => item.id !== idUser);
        this.setState({
            data: tempData
        });
        
        // tempData.forEach((value,key) =>{
        //     if(value.id=== idUser){
        //         console.log(key);
        //     }
        // } )
        
    }

    
    render() {
        
        var ketqua =[];
        this.state.data.forEach((item) =>{
            if(item.name.indexOf(this.state.searchText) !==-1){
                ketqua.push(item);
            }
        })

        
        return (
            <div>
                <div className="searchForm">
                    <div className="container">
                        <div className="row">
                            <SearchForm 
                                getUserEditInfoContent = {(info) => this.getUserEditInfoContent(info)}
                                checkConnectProps={(dl) =>this.getTextSearch(dl)} ketNoi={()=>this.doiTrangThai()} 
                                hienThiForm={this.state.hienThiForm} 
                                editUserStatus={this.state.editUserStatus}
                                changeEditUserStatus = {()=>this.changeEditUserStatus()}
                                userEditObject = {this.state.userEditObject}
                            />                     
                            <TableData  
                            deleteUser = {(idUser) =>this.deleteUser(idUser)}
                            editFun={(user) =>this.editUser(user)} dataUserProps={ketqua} 
                                changeEditUserStatus = {()=>this.changeEditUserStatus()}

                            />
                            <AddUser add={(name, tel, Permission) => this.getNewUserData(name, tel, Permission)} 
                                hienThiForm={this.state.hienThiForm}
                            />  
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Content;