import React from "react"
import PropTypes from "prop-types"
import styles from '../styles/card.module.css'
 // import Image from './image';

const Tag = (props) => {
    return(
    <div className={styles.tag}>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {props.value}
    </div>)
}


const Card = ({title, topicNumber, tags, date, time, venue, bkg}) => (
    
    <div className={styles.card}> 
        <div className={styles.img} style={{ background: `${bkg}` }}>   
            <div className={styles.redO}> </div>
            
        </div>
        <div className={styles.content}> 
            <p>#Topic {topicNumber}</p>
            <h1>{title}</h1>
            <div className={styles.flex}> {tags.map((tag) => <Tag value={tag} />)} </div>
            <p> <b><i>At {venue} on <br/> {date} from {time} </i> </b> </p>
            <div className={styles.links}> 
                <a href="www.facebook.com"> Watch Live </a> 
                <a href="www.facebook.com"> Feedback </a> 
            </div>
        </div>
    </div>
)

Card.propTypes = {
    title : PropTypes.string,
    topicNumber : PropTypes.string,
    tags : PropTypes.arrayOf(PropTypes.string),
    venue : PropTypes.string,
    date : PropTypes.string,
    time : PropTypes.string,
    bkg : PropTypes.string
}

Card.defaultProps = {
    title : "Why Start A Startup?",
    topicNumber : "1",
    tags : ["Career", "Motivation", "Tool Name"],
    venue : "ANDC InStart",
    date : "9th March",
    time : "10:30 AM",
    bkg : 'url(https://cdn.wccftech.com/wp-content/uploads/2015/03/Dragon-Age-Inquisition-2060x791.jpg) no-repeat center',
}

export default Card;