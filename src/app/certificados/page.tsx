import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '@/components/Footer/Footer.jsx'
import img1 from '../../../public/assests/pdf/certificado1.png'
import img2 from '../../../public/assests/pdf/certificado2.png'
import img3 from '../../../public/assests/pdf/Certificado3.png'
import img4 from '../../../public/assests/pdf/Certificado4.png'
import img5 from '../../../public/assests/pdf/Certificado5.png'
import img6 from '../../../public/assests/pdf/Certificado6.png'
import "./style.css";
import Image from 'next/image';
export default function Cetificados() {
   return (
      <>
         <Navbar />
         <div className="container-body">
            <div className="content">
               <h2>Certificados</h2>
               <section>
                  <div className="card-info">
                     <Image src={img1} alt="imersão dev back-end" />
                  </div>
                  <div className="card-info">
                     <Image src={img2} alt="imersão dev back-end" />
                  </div>
                  <div className="card-info">
                     <Image src={img3} alt="imersão dev back-end" />
                  </div>
                  <div className="card-info">
                     <Image src={img4} alt="imersão dev back-end" />
                  </div>
                  <div className="card-info">
                     <Image src={img5} alt="imersão dev back-end" />
                  </div>
                  <div className="card-info">
                     <Image src={img6} alt="imersão dev back-end" />
                  </div>
               </section>
            </div>
         </div>
         <Footer />
      </>
   )
}

