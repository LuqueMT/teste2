'use client'
import "./slider.css"
import React, { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineQueuePlayNext } from "react-icons/md";

import temp1 from "@/../public/assests/pages/NexusTravel.png"
import temp2 from "@/../public/assests/pages/petshop.png"
import temp3 from "@/../public/assests/pages/FlowBite.png"
import temp4 from "@/../public/assests/temp4.jpeg"



export default function Slider() {

    useEffect(() => {
        const nextBtn = document.querySelector('.next');
        const prevBtn = document.querySelector('.prev');
        const slider = document.querySelector('.slider');
        const sliderList = slider.querySelector('.slider .list');
        const thumbnail = document.querySelector('.thumbnail');
        const thumbnailItems = thumbnail.querySelectorAll('.item');

        const moveSlider = (direction) => {
            const sliderItems = sliderList.querySelectorAll('.item');
            const thumbnailItems = document.querySelectorAll('.thumbnail .item');

            if (direction === 'next') {
                sliderList.appendChild(sliderItems[0]);
                thumbnail.appendChild(thumbnailItems[0]);
                slider.classList.add('next');
            } else {
                sliderList.prepend(sliderItems[sliderItems.length - 1]);
                thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
                slider.classList.add('prev');
            }

            slider.addEventListener('animationend', function () {
                if (direction === 'next') {
                    slider.classList.remove('next');
                } else {
                    slider.classList.remove('prev');
                }
            }, { once: true });
        };

        nextBtn.addEventListener('click', () => moveSlider('next'));
        prevBtn.addEventListener('click', () => moveSlider('prev'));
    }, []);


    return (
        <div className="container-slider">
            <div className="slider">
                <div className="list">
                    <div className="item">
                        <Image src={temp1} height={800} width={1320} alt="imagem" />
                        <div className="content">
                            <div className="title">Travel Agency</div>
                            <div className="type">Tailwind</div>
                            <div className="desc black">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestias.
                            </div>
                            <div className="button">
                                <Link target="_blank" href="https://luquemt.github.io/traveling_page/">
                                    <button>Ver Mais</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <Image src={temp2} height={800} width={1320} alt="imagem" />
                        <div className="content">
                            <div className="title">Pet Shop Page</div>
                            <div className="type">Shadcn.ui</div>
                            <div className="desc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestias.
                            </div>
                            <div className="button">
                                <Link target="_blank" href="https://luquemt.github.io/petshop_page/">
                                    <button>Ver Mais</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <Image src={temp3} height={800} width={1320} alt="imagem" />
                        <div className="content">
                            <div className="title">Projeto Visual</div>
                            <div className="type">Flowebite</div>
                            <div className="desc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestias.
                            </div>
                            <div className="button">
                                <Link target="_blank" href="https://luquemt.github.io/visual_project/">
                                    <button>Ver Mais</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <Image src={temp4} height={800} width={1320} alt="imagem" />
                        <div className="content">
                            <div className="title">Magic Slider</div>
                            <div className="type">Flower</div>
                            <div className="desc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestias.
                            </div>
                            <div className="button">
                                <Link target="_blank" href="#">
                                    <button>Ver Mais</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="thumbnail">
                    <div className="item">
                        <Image src={temp1} alt="imagem" />
                    </div>
                    <div className="item">
                        <Image src={temp2} alt="imagem" />
                    </div>
                    <div className="item">
                        <Image src={temp3} alt="imagem" />
                    </div>
                    <div className="item">
                        <Image src={temp4} alt="imagem" />
                    </div>
                </div>
                <div className="nextPrevArrows">
                    <button className="prev">
                        <p>Próximo</p>
                        <i>
                            <MdOutlineQueuePlayNext />
                        </i>
                    </button>
                    <button className="next"> <FaArrowRight /> </button>
                </div>
            </div>
        </div>
    )
}