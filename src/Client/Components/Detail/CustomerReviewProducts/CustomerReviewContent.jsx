import React from "react";
import { Markup } from 'interweave';

class CustomerReviewContent extends React.Component{
    constructor(props) {
        super(props);
    };

    render(){
        if(this.props.data){
            return(
                <section className="py-5">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Mô tả sản phẩm
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>{this.props.data.short_description}</p>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Thông số sản phẩm
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body" id="specs_content">
                                {this.props.data.specs ? (
                                     <Markup content={this.props.data.specs.value_specs} /> 
                                ) : (
                                    <p>Không có thông tin</p>
                                )}
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Đánh Giá
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body row">
                                <div className="col-md-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <b>user name</b>
                                            <p>This is some text within a card body.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-body">
                                            <b>user name</b>
                                            <p>This is some text within a card body.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-body">
                                            <b>user name</b>
                                            <p>This is some text within a card body.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-body">
                                            <b>user name</b>
                                            <p>This is some text within a card body.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <form className="form-control">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                            </div>
                                            <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
export default CustomerReviewContent;