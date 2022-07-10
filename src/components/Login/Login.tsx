import { useContext } from "react";
import UiContext from "../../context/ui";

import styles from "./Login.module.scss";

const Login = () => {
  const { setUserValidated } = useContext(UiContext);
  return (
    <div className={styles.screen}>
      <div className={styles.contentLogin}>
        <div className={styles.imgLogo}></div>
        <div className={styles.formLogin}>
          <div className={styles.field}>
            <input id="inputEmail" type="email" placeholder=" " />
            <label htmlFor="inputEmail">Correo electrónico</label>
          </div>
          <div className={styles.field}>
            <input id="inputPassword" type="password" placeholder=" " />
            <label htmlFor="inputPassword">Contraseña</label>
          </div>
        </div>
        <button
          type="submit"
          onClick={() => {
            setUserValidated(true);
          }}
        >
          Ingresar
        </button>
        <a href="#">Olvidé mi contraseña</a>
      </div>
    </div>
  );
};

export default Login;
