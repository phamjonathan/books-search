import React from "react";

function Card({ icon, title, children }) {
    return(
        // Card Content
        <div className="card m4-t">
            <div className="card-header">
                <h2>
                              {/* // Text Alternative attribute to icon */}
                    <strong>
                        <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
                    </strong>
                </h2>
            </div>
        </div>
    );
}

export default Card;