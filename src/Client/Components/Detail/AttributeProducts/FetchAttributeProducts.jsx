import React from "react";

class FetchAttributeProducts extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
       if(this.props.attribute){
        return(Object.keys(this.props.attribute).map((e, i)=>{
            return <>
                <div>
                    <strong key={'wrap-'+i} className="text-dark mr-3" >{e} : </strong><br/>
                      { this.props.attribute[e].map((element, index) => {
                          return <div key={'child'+index} className="form-check form-check-inline radio-dark">
                            <input className="form-check-input" type="radio" id={`attr-${element.id}`} onChange={this.setState(element.price)} value={element.id} name={e}/>
                            <label className="form-check-label" htmlFor={`attr-${element.id}`}>{element.value}</label>
                          </div>
                        })
                        }
                </div>
            </>            
            })
          )
       }
    }
}
export default FetchAttributeProducts;