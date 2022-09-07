import React from "react";

export default function FormatPrice(props){
    const money =  props.price;
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}
    const formated = new Intl.NumberFormat('vi-VN', config).format(money);

    return <span>{formated}</span>
  }