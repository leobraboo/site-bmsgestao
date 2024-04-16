import Image from "next/image";
import "./style.css";

export function Description() {
  const handleMaps = () => {
    window.open("https://pedidos.bmspedidos.com.br/register");
  };
  return (
    <section className="container-maps">
      <div className="content-img-maps">
        <Image
          className="img-maps"
          src="/demo.png"
          width={550}
          height={400}
          alt="maps image"
        />
      </div>

      <div className="description-maps">
        <h2 className="subtitle-maps">Gestão de Vendas</h2>
        <p>Completo Frente de Caixa, Orçamentos, Vendas e Ordem de Serviço.</p>
        <h2 className="subtitle-maps">Gestão Financeira</h2>
        <p>Tenha controle da saúde financeira do seu negócio.</p>
        <h2 className="subtitle-maps">Emissões Fiscais</h2>
        <p>Regularize a sua operação de forma rápida e simples.</p>
        <div className="free-btn-maps">
          <button onClick={handleMaps} className="btn-free-maps">
            Quero Melhorar Minhas Entregas
          </button>
        </div>
      </div>
    </section>
  );
}
