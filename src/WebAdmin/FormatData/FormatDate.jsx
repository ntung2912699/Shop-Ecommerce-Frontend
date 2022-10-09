import React from "react";
import Moment from 'moment';

export default function FormatDate(props){
    const formatDate = Moment(props.date).format('HH:MM A DD-MM-YYYY')
    return formatDate;
}