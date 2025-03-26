import Navbar from "@/components/Navbar/Navbar";
import "./contatos.css";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import img from '@/../public/assests/icons/LikeABro.svg'

export default function Contatos() {
	return (
		<>
			<Navbar />
			<div className="body-contatos">
				<section className="container-section">
					<div className="content-form">
						<h2>Contato</h2>
						<form action="https://api.staticforms.xyz/submit" method="post">
							<input type="hidden" name="accessKey" value="1b941ef8-05fd-48fe-acc6-eb8bb718522b"></input>
							<label>Nome</label>
							<input type="text" name="name" placeholder="Digite seu nome" autoComplete="off" required />
							<label>E-mail</label>
							<input type="email" name="email" placeholder="Digite seu e-mail" autoComplete="on" required />
							<label>Mensagem</label>
							<textarea name="message" cols="30" rows="10" placeholder="Digite sua mensagem" required></textarea>
							<button type="submit">
								<span className="text">Enviar</span>
								<span>Obrigado!</span>
							</button>
							<input type="hidden" name="redirectTo" value="https://luquemt.github.io/teste.2/thanks"></input>
						</form>
					</div>
					<div className="content-img">
						<Image src={img} alt="Like man" />
					</div>
				</section>
			</div>
			<Footer />
		</>
	)
}