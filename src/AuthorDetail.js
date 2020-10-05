import React from "react";

const AuthorDetail = (props) => {
    const author = props.author
    const authorName = `${author.first_name} ${author.last_name}`

    const booksTable = author.books.map(book => {
        return (
        <tr>
            <td>{book.title}</td>
            <td>{authorName}</td>
            <td>
                <button className="btn" style={{backgroundColor: `${book.color}`}}/>
            </td>
        </tr>
        )
    })
    return (
        <div className="author col-xs-10">
            <div>
                <h3>{authorName}</h3>
                <img src={author.imageUrl} className="img-thumbnail" alt=""/>
            </div>
            <table className='mt-3 table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Authors</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {booksTable}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorDetail;
