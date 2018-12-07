import React, { Component } from 'react';
import SearchResult from './SearchResult';


class SearchResultList extends  Component{

    render(){

        const addressDetails=[{
            companyName : '陕西分公司西安客户服务中心',
            companyAddress : '地址:西安市莲湖区西大街299号平安大厦一楼（贡院门中段）',
            workTime : '营业时间：周一至周五9：00-17:00'
        },{
            companyName : '陕西分公司西安雁塔第一销售中心',
            companyAddress : '地址：陕西省西安市新城区解放路17号民生新乐汇四楼',
            workTime : '营业时间：周一至周五8：30-12:00,14:00-17:30'
        },{
            companyName : '陕西分公司西安莲湖第一客户服务中心',
            companyAddress : '地址：陕西省西安市西大街299号平安大厦四层',
            workTime : '营业时间：周一至周五8：30-12:00,14:00-17:30'
        },{
            companyName : '陕西分公司西安碑林第二销售中心',
            companyAddress : '地址：陕西省西安市雁塔区南二环太白立交西五百米瑞鑫摩天城五层',
            workTime : '营业时间：周一至周五8：30-12:00,14:00-17:30'
        },{
            companyName : '陕西分公司西安碑林第二销售中心',
            companyAddress : '地址：陕西省西安市雁塔区南二环太白立交西五百米瑞鑫摩天城五层',
            workTime : '营业时间：周一至周五8：30-12:00,14:00-17:30'
        }];

        if(this.props.keyWord && this.props.keyWord !== ''){
            const filterItem = addressDetails.map((detail,key) => {
                const coname = detail.companyName;
                const coaddress = detail.companyAddress;
                const contains = coname.search(this.props.keyWord)!== -1 || coaddress.search(this.props.keyWord)!== -1;
                return  contains ? <SearchResult address={detail} key={key}/> : null;
            });

            return(
                <div>
                    {filterItem}
                </div>
            );
        }

        const listItem = addressDetails.map((detail,key) => {
            return <SearchResult address={detail} key={key}/>
        });
        return(
            <div>
                {listItem}
            </div>
        );

    }
}

export  default SearchResultList;