import './header.css'

function Header (){
    return(
        <div className='header'>
            <img src="imagem/images-removebg-preview.png" width={100} height={100}/>

            <a href="#home">Home</a>
            <button className='entrar'>Entrar</button>
            <button className='cadastra'>Cadastra</button>


        </div>
    );
};

export default Header;