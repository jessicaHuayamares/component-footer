import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *::before, *::after {
  box-sizing: inherit;
}

.footer {
  background-color: #111;
  color: #fff;
  padding: 40px 40px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
}

.footer-column {
  flex: 1;
  margin-right: 30px;
}

.footer-column-icons .footer-list {
  display: flex;
  list-style: none;
}

.footer-column-icons .footer-list li {
  margin-right: 10px;
}

.footer-heading {
  font-size: 1.2em;
}

.footer-list {
  list-style: none;
  padding: 0;
}

.footer-list li {
  margin-bottom: 10px;
}

.footer-list a {
  color: #fff;
  text-decoration: none;
}

.footer-list li:hover a {
  color: rgba(255, 255, 255, 0.7); /* Cambiar el color al pasar el mouse */
  text-decoration: none; /* Esto puede ser necesario si quieres que el subrayado desaparezca al pasar el mouse */
}

.footer-bottom {
  margin-top: 20px;
  border-top: 1px solid #555;
  padding-top: 10px;
  text-align: center;
}

.footer-bottom {
  text-align: center; /* Centra el texto horizontalmente */
}

.footer img {
  filter: brightness(0) invert(1); /* Cambia el color a blanco */
  width: 20px;
  height: 20px;
}
`;
