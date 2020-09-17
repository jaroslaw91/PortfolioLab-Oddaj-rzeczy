import React, { Component } from 'react';
import { AppContext } from "../../../AppContext";

export default class Pagination extends Component {
    static contextType = AppContext;

    render() {
        const { items, currentPage, perPage, fundationName, onPage } = this.context;

        const allPage = currentPage * perPage;
        const firstPage = allPage - perPage;
        const currentItems = items.slice(firstPage, allPage);

        const renderItems = currentItems.map((items, index) => {
            return (
                <div className="Pagination__box" key={index}>
                    <div className="Pagination__box--header">
                        <h3>{fundationName} {items.header}</h3>
                        <p>Cel i misja: {items.subheader}</p>
                    </div>
                    <p>{items.desc}</p>
                </div>
            );

        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / perPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li key={number} id={number} onClick={onPage} className={currentPage === number ? "active" : null}>
                    {number}
                </li>
            );
        });

        return (
            <div className="Pagination">
                <ul>
                    {renderItems}
                </ul>
                <ul className="Pagination__page">
                    {renderPageNumbers.length > 1 ? renderPageNumbers : null}
                </ul>
            </div>
        );
    }
}