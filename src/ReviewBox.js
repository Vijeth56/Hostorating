import React from "react";
import './ReviewBox.css';

function ReviewBox() {
    return (
        <div className="reviewBox">
            <form>
                <div className="Box">
                    <input placeholder="Write your review here ...."></input>
                </div>
                <button type="button" className="btn btn-outline-secondary">Submit</button>
            </form>
        </div>
    );
}

export default ReviewBox;