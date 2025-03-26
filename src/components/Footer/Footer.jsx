import "./footer.css"
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
   return (
      <div className="container-footer">
         <footer>
            <div className="footer_content">
               <div className="footer_contacts">
                  <h1>Nexus</h1>
                  <p>O reconhecimento da própria ignorância, <br/> é o primeiro passo para o autocinhecimento.</p>
                  <div className="footer_social_media">
                     <a href="" className="footer-link github">
                        <FaGithub/>
                     </a>
                     <a href="" className="footer-link linkedin">
                        <FaLinkedin/>
                     </a>
                     <a href="" className="footer-link whatsapp">
                        <FaWhatsapp/>
                     </a>
                  </div>
               </div>
               <ul className="footer-list">
                  <li>
                     <h3>Nexus</h3>
                  </li>
                  <li>
                     <a href="#" className="footer-link">Sobre</a>
                  </li>
                  <li>
                     <a href="#" className="footer-link">Projetos</a>
                  </li>
                  <li>
                     <a href="#" className="footer-link">Curriculo</a>
                  </li>
               </ul>
               <ul className="footer-list">
                  <li>
                     <h3>Utilities</h3>
                  </li>
                  <li>
                     <a href="#" className="footer-link">Politica De Privacidae</a>
                  </li>
                  <li>
                     <a href="#" className="footer-link">Politica de Cookies</a>
                  </li>
                  <li>
                     <a href="#" className="footer-link">Inspirações</a>
                  </li>
               </ul>
               <div className="footer_subscribe">
                  <h3>E-mail</h3>
                  <p>
                     Digite seu email e clique no botão ao lado para enviar um e-mail direto.
                  </p>
                  <div className="input_group">
                     <input type="email" className="email-input" />
                     <button type="submit" href="contatos">
                        <HiOutlineMail className="fa-regular fa-envelope" />
                     </button>
                     <input type="hidden" name="redirectTo" value="http://localhost:3000/contatos"></input>
                  </div>
               </div>
            </div>
            <div className="footer-copyright">
               ©
               2025 all rights reserved.
            </div>
         </footer>
      </div>
   )
}