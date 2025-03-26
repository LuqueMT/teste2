import Link from "next/link"
import Image from "next/image"
import "./thanks.css"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import logo1 from "@/../public/assests/icons/linkedin.png"
import logo2 from "@/../public/assests/icons/whatsapp.png"
import logo3 from "@/../public/assests/icons/outlook.png"
import img1 from '@/../public/assests/icons/likeman.svg'
export default function Thanks() {
    return (
        <>
            <Navbar />
            <div className="container-obg">
                <section className="body-obg">
                    <Image src={img1} alt="Imagem de Like" />
                    <h2>Obrigado pelo interesse!</h2>
                    <p>Se preferir outros métodos de contato, podes escolher dentre as opções a baixo.</p>
                    <div className="options">
                        <div className="linkedin-btn btn">
                            <Image src={logo1} alt="logo linkedin" />
                            <Link href="#">
                                LinkedIn
                            </Link>
                        </div>
                        <div className="whatsapp-btn btn">
                            <Image src={logo2} alt="logo linkedin" />
                            <Link href="#">
                                WhatsApp
                            </Link>
                        </div>
                        <div className="outlook-btn btn">
                            <Image src={logo3} alt="logo linkedin" />
                            <Link href="#">
                                Email
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}