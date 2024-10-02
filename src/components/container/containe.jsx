import "./containe.css"

function Containe() {
    return (
        <div className="containe">
            <h1>Comece agora grátis</h1>
            <h3>crie sua conta a make the change._</h3>
            <input type="text" name="nomecompleto" className="nome" placeholder="Nome completo" id="inpuout"/><br />
            <input type="email" name="Email" className="email" placeholder="E-mail" id="inpuout"/><br />
            <input type="password" name="senha" className="senha" placeholder="password" id="inpuout"/><br />

            <button className="criarminhaconta">Criar minha conta</button><br />

            <p className="aviso">Ao clica em Criar minha conta ,<br /> declaro que aceito as Politicas de <br/> privacidade e os Termos de Uso da DIO.</p> <br />
            
            <strong><p className="jatenhoumaconta">já tenho conta.</p> <a href="#home" className="fezerlogin"> fazer login</a></strong>
        </div>
    );
};

export default Containe;
