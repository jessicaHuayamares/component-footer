import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './cells-project-footer.css.js';

/**
 * ![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)
 *
 * This component ...
 *
 * Example:
 *
 * ```html
 *   <cells-project-footer></cells-project-footer>
 * ```
 */
export class CellsProjectFooter extends LitElement {
  static get properties() {
    return {
      footerIconFacebook: {type: String,},
      footerIconTwitter: {type: String,},
      footerIconInstagram: {type: String,},
      footerIconYoutube: {type: String,},

      footerNavigation1: {type: String,},
      footerNavigation2: {type: String,},
      footerNavigation3: {type: String,},
      footerNavigation4: {type: String,},
      footerNavigation5: {type: String,},
      footerNavigation6: {type: String,},
      footerNavigation7: {type: String,},
      footerNavigation8: {type: String,}
    };
  }

  constructor() {
    super();
    this.footerIconFacebook = '';
    this.footerIconTwitter = '';
    this.footerIconInstagram = '';
    this.footerIconYoutube = '';

    this.footerNavigation1 ='';
    this.footerNavigation2 ='';
    this.footerNavigation3 ='';
    this.footerNavigation4='';
    this.footerNavigation5 ='';
    this.footerNavigation6 ='';
    this.footerNavigation7 ='';
    this. footerNavigation8=''
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-project-footer-shared-styles'),
    ];
  }

  render() {
    return html`
      <footer class="footer">
      <div class="footer-bottom">
          <p>© 1997-2024 Netflix, Inc</p>
      </div>
        <div class="footer-container">
          <div class="footer-column">
            <ul class="footer-list">
              <li><a href="#">${this.footerNavigation1}</a></li>
              <li><a href="#">${this.footerNavigation2}</a></li>
              <li><a href="#">${this.footerNavigation3}</a></li>
              <li><a href="#">${this.footerNavigation4}</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <ul class="footer-list">
              <li><a href="#">${this.footerNavigation5}</a></li>
              <li><a href="#">${this.footerNavigation6}</a></li>
              <li><a href="#">${this.footerNavigation7}</a></li>
              <li><a href="#">${this.footerNavigation8}</a></li>
            </ul>
          </div>
          <div class="footer-column-icons">
            <ul class="footer-list">
              <li><a href="https://www.facebook.com/NetflixLatino/?locale=es_LA"><img src=${this.footerIconFacebook} alt="Facebook"></a></li>
              <li><a href="https://twitter.com/netflixlat?lang=es"><img src=${this.footerIconTwitter} alt="Twitter"></li>
              <li><a href="https://www.instagram.com/netflixlat/?hl=es"><img src=${this.footerIconInstagram} alt="Instagram"></a></li>
              <li><a href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw"><img src=${this.footerIconYoutube} alt="YouTube"></a></li>
            </ul>
          </div>
        </div>

      </footer>

    `;
  }
}
