import React from "react";
import { MDBCheckbox, MDBBtnGroup } from 'mdb-react-ui-kit';

class FetchAttributeProducts extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
       if(this.props.attribute){
        return(Object.keys(this.props.attribute).map((e, i)=>{
            return <>
            <MDBBtnGroup>
              <strong key={'wrap-'+i} className="text-dark mr-3" >{e} : </strong><br/>
              { this.props.attribute[e].map((element, index) => {
                 return <MDBCheckbox name='btnCheck' btn id={`attr-${element.id}`} onChange={this.setState(element.price)} wrapperTag='span' value={element.id} label={element.value} />
                })
              }
            </MDBBtnGroup>
            </>            
            })
          )
       }
    }
}
export default FetchAttributeProducts;