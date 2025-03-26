import "./apis.css"
import Image from "next/image"
import { IoInformationCircleOutline } from "react-icons/io5";
import Link from "next/link"
export default function W_APIs() {
    return (
        <section className='section-img'>
            <div className='img-cole'>
                <div className="content-colection">
                    <div className="content-image spotify">
                        <div className="info-colection">
                            <h2>Spotify</h2>
                            <Link target="_blank" href="https://jornada-fullstack-hashtag-0bqs.onrender.com">
                                <div className="button-info">
                                    <button className="button">Ver Mais</button>
                                </div>
                            </Link>
                            <button className="button-2 show-popup">
                                <IoInformationCircleOutline />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='img-cole'>
                <div className="content-colection">
                    <div className="content-image ">
                        <div className="info-colection">
                            <h2>Em Breve</h2>
                            <Link  href="#">
                                <div className="button-info">
                                    <button className="button">Ver Mais</button>
                                </div>
                            </Link>
                            <button className="button-2 show-popup">
                                <IoInformationCircleOutline />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='img-cole'>
                <div className="content-colection">
                    <div className="content-image">
                        <div className="info-colection">
                            <h2>Em Breve</h2>
                            <Link href="#">
                                <div className="button-info">
                                    <button className="button">Ver Mais</button>
                                </div>
                            </Link>
                            <button className="button-2 show-popup">
                                <IoInformationCircleOutline />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
