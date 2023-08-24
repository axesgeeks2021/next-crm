import React, { useEffect, useRef, useState } from 'react'

const contents = [
    {
        id: 1,
        hrefId: "start",
        question: "What is a Private Limited Company?",
        answer: [
            "A private limited company comes under one of the most highly recommended ways to create a business in India since it secures shareholders with limited liability and precise ownership limits.",
            "Private Limited Company Registration becomes the first choice for any startup since it gives the easiest way to raise funds from investors.",
            "Technically, the private limited company is a company that is privately owned and operated by small and medium enterprises. Business liability is limited to their shareholdings, the number of shareholders is limited to 200, and directors, and shareholders of the company can be the same person or different from each other.",
            "It's a type of company incorporation that give firms a legal personality independent from its owners, directors and shareholders. As a result, crucial services such as the capacity to contract in its name and the protection of the owner's personal assets from company obligations are provided."
        ]
    },
    {
        id: 2,
        hrefId: "second",
        question: "What is a Private Limited Company?",
        answer: [
            "A private limited company comes under one of the most highly recommended ways to create a business in India since it secures shareholders with limited liability and precise ownership limits.",
            "Private Limited Company Registration becomes the first choice for any startup since it gives the easiest way to raise funds from investors.",
            "Technically, the private limited company is a company that is privately owned and operated by small and medium enterprises. Business liability is limited to their shareholdings, the number of shareholders is limited to 200, and directors, and shareholders of the company can be the same person or different from each other.",
            "It's a type of company incorporation that give firms a legal personality independent from its owners, directors and shareholders. As a result, crucial services such as the capacity to contract in its name and the protection of the owner's personal assets from company obligations are provided."
        ]
    },
    {
        id: 3,
        hrefId: "third",
        question: "What is a Private Limited Company?",
        answer: [
            "A private limited company comes under one of the most highly recommended ways to create a business in India since it secures shareholders with limited liability and precise ownership limits.",
            "Private Limited Company Registration becomes the first choice for any startup since it gives the easiest way to raise funds from investors.",
            "Technically, the private limited company is a company that is privately owned and operated by small and medium enterprises. Business liability is limited to their shareholdings, the number of shareholders is limited to 200, and directors, and shareholders of the company can be the same person or different from each other.",
            "It's a type of company incorporation that give firms a legal personality independent from its owners, directors and shareholders. As a result, crucial services such as the capacity to contract in its name and the protection of the owner's personal assets from company obligations are provided."
        ]
    },
    {
        id: 4,
        hrefId: "forth",
        question: "What is a Private Limited Company?",
        answer: [
            "A private limited company comes under one of the most highly recommended ways to create a business in India since it secures shareholders with limited liability and precise ownership limits.",
            "Private Limited Company Registration becomes the first choice for any startup since it gives the easiest way to raise funds from investors.",
            "Technically, the private limited company is a company that is privately owned and operated by small and medium enterprises. Business liability is limited to their shareholdings, the number of shareholders is limited to 200, and directors, and shareholders of the company can be the same person or different from each other.",
            "It's a type of company incorporation that give firms a legal personality independent from its owners, directors and shareholders. As a result, crucial services such as the capacity to contract in its name and the protection of the owner's personal assets from company obligations are provided."
        ]
    },
    {
        id: 5,
        hrefId: "fifth",
        question: "What is a Private Limited Company?",
        answer: [
            "A private limited company comes under one of the most highly recommended ways to create a business in India since it secures shareholders with limited liability and precise ownership limits.",
            "Private Limited Company Registration becomes the first choice for any startup since it gives the easiest way to raise funds from investors.",
            "Technically, the private limited company is a company that is privately owned and operated by small and medium enterprises. Business liability is limited to their shareholdings, the number of shareholders is limited to 200, and directors, and shareholders of the company can be the same person or different from each other.",
            "It's a type of company incorporation that give firms a legal personality independent from its owners, directors and shareholders. As a result, crucial services such as the capacity to contract in its name and the protection of the owner's personal assets from company obligations are provided."
        ]
    },

]

function content() {

    

    return (
        <div className='content'>
                {/* <h1>What is a Private Limited Company?</h1>
                <p>A private limited company comes under one of the most highly recommended ways to create a business in India since it secures shareholders with limited liability and precise ownership limits.<br />Private Limited Company Registration becomes the first choice for any startup since it gives the easiest way to raise funds from investors.<br />Technically, the private limited company is a company that is privately owned and operated by small and medium enterprises. Business liability is limited to their shareholdings, the number of shareholders is limited to 200, and directors, and shareholders of the company can be the same person or different from each other.<br />It's a type of company incorporation that give firms a legal personality independent from its owners, directors and shareholders. As a result, crucial services such as the capacity to contract in its name and the protection of the owner's personal assets from company obligations are provided.</p> */}
                {
                    contents.map((ele, idx) => {
                        return(
                            <div className='each__content' key={idx} id={ele.hrefId}>
                                <h1>{ele.question}</h1>
                                {
                                    ele.answer.length > 1 ? ele.answer.map((ele, idx) => {
                                        return(
                                            <p>{ele}</p>
                                        )
                                    }) : ele.answer[0]
                                }
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default content