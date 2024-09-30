const Login = () => {
    return (
      <div>
        <h2>Login</h2>
        <form>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="E-mail" />
            </div>
            <div>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Senha" />
            </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  };
  
  export default Login;