import React from 'react'

function Paginate({ postsPerPage, totalPosts, paginate, nextReviews }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div id="wrapper1">
            <ul id="pagination">
                <li><a style={{background: "#fcc914",color: "#fff"}}>Back</a></li>
                {
                    pageNumbers.map((ele, idx) => {
                        return(
                            <li key={idx}
                            onClick={() => paginate(ele)}
                            ><a>{ele}</a></li>        
                        )
                    })
                }
                <li onClick={nextReviews}><a style={{background: "#fcc914",color: "#fff"}}>Next</a></li>
            </ul>
        </div>
    )
}

export default Paginate