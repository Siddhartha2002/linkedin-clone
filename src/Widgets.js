import React from 'react';
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("REACTJS  is back", "Top news - 9099 readers")}
            {newsArticle("Coronavirus: INDIA updates", "Top news - 8886 readers")}
            {newsArticle("Tesla hits new highs", "Top news - 8465 readers")}
            {newsArticle("Is React better than Angular?", "Top news - 2067 readers")}
            {newsArticle("Aryan Khan granted bail by Bomabay Hight Court!!", "Top news - 5493 readers")}
            {newsArticle("SRK poses with smile with the team of lawyers", "Top news - 7888 readers")}
        </div>
    )
}

export default Widgets
