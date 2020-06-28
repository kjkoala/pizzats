import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import '../assets/css/style.css';

import { Slider } from './slider';
import { FoodMenu } from './FoodMenu';

type PropsTypes = {
  children: ReactNode;
}

export const Layout: FC<PropsTypes> = ({ children }: PropsTypes) => {
  const SliderWrapRef = useRef<HTMLDivElement>(null);
  const MenuFoodRed = useRef<HTMLDivElement>(null);
  const PseudoMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const coord = SliderWrapRef.current?.getBoundingClientRect();
      if (coord?.bottom && MenuFoodRed?.current && SliderWrapRef?.current && PseudoMenuRef?.current) {
        if (coord.bottom <= 0) {
          let menuPixel = MenuFoodRed.current.getBoundingClientRect().height.toString();
          menuPixel += 'px';
          MenuFoodRed.current.style.position = 'fixed';
          MenuFoodRed.current.style.top = '0';
          MenuFoodRed.current.style.width = '100%';
          PseudoMenuRef.current.style.paddingBottom = menuPixel;
        } else {
          MenuFoodRed.current.style.position = '';
          MenuFoodRed.current.style.top = '';
          MenuFoodRed.current.style.width = '';
          PseudoMenuRef.current.style.paddingBottom = '';
        }
      }
    });
  }, []);

  return (
    <>
      <header className="header _bg-red">
        <div className="container">
          <div className="header__wrap">
            <div className="header__logo"><svg xmlns="http://www.w3.org/2000/svg" width="201" height="54">
              <path fill="#FFF" fill-rule="evenodd" d="M187.839 24.38c-2.665 3.443-6.395 6.109-11.138 6.706-5.621.708-9.073-1.81-9.981-6.334-3.067 4.787-6.423 8.4-10.587 8.925-4.157.523-8.58-2.026-4.743-11.99l1.705-4.554c.427-1.125.48-1.667.48-1.935 0-1.071-1.173-1.888-2.611-2.938-1.439 3.554-2.771 6.346-4.262 9.158v.002c-4.156 7.808-9.325 14.619-15.827 15.438-5.542.698-6.235-3.661-6.235-3.661s-3.677 4.909-8.367 5.5c-3.736.471-5.748-2.038-5.995-5.518-3.035 4.212-6.38 7.077-10.79 7.632-6.608.832-8.1-4.282-13.696 1.029l-2.771-3.347 16.627-17.199c-1.652-.113-3.624-.883-5.862-.601-2.451.309-3.57 1.736-7.034 8.277l.001.001c-4.476 8.277-8.74 14.545-15.508 15.398-6.608.832-8.1-4.283-13.695 1.028l-2.771-3.347 16.626-17.199c-1.652-.113-3.623-.883-5.862-.601-2.451.309-3.57 1.736-7.034 8.277l.001.001c-4.104 7.748-9.433 14.633-15.561 15.404-4.849.611-8.26-2.815-4.37-13l6.022-15.703 8.473-1.068-6.555 17.216c-2.451 6.416-1.492 7.045-.586 6.931 2.132-.269 5.809-4.481 9.592-11.546v-.001c4.476-8.383 5.702-14.323 12.097-15.128 4.369-.551 8.366 1.624 13.589-1.016l2.771 3.347-15.614 16.268c2.451.067 4.423 1.8 7.141 1.458 1.971-.249 4.636-1.709 8.259-8.485l-.001-.001c4.477-8.384 5.703-14.323 12.097-15.129 4.37-.55 8.367 1.625 13.59-1.015l2.771 3.347L96.61 30.675c2.452.066 4.424 1.8 7.141 1.458 1.925-.243 4.513-1.655 8.006-8.026 2.078-6.872 6.364-14.835 13.203-15.696 5.169-.651 6.341 3.54 6.341 3.54l9.966-4.898-6.608 17.223c-2.398 6.355-1.492 7.044-.533 6.923 2.131-.268 5.755-4.473 9.591-11.544l-.001-.002c1.172-2.237 2.665-5.477 4.21-9.1-.959-.897-1.652-1.72-1.652-3.059 0-2.732 2.824-5.98 5.009-6.952l3.464 1.492-1.705 4.5c2.185 1.653 8.74 3.827 8.74 7.845 0 .642-.16 1.466-.64 2.758l-1.492 3.991c-2.451 6.308-1.172 7.004-.426 6.91 1.471-.186 3.98-3.736 7.982-11.053 1.795-6.833 6.918-14.767 15.784-15.883 6.448-.813 10.018 2.487 10.018 8.701 0 2.946-.799 6.635-2.398 10.104 2.611-.757 5.223-3.068 7.407-7.093 1.12-.034 2.558.803 2.985 1.767-2.878 5.344-7.727 9.543-13.163 9.799zm-61.174-9.221c-4.21.53-8.153 11.044-8.153 14.472 0 1.392.639 1.901 1.705 1.766 2.931-.368 5.382-4.534 5.382-4.534l3.464-9.006s-.053-2.993-2.398-2.698zm56.218-8.473c-4.21.53-8.313 12.295-8.313 16.259 0 1.714.799 2.738 2.078 2.577 1.279-.161 2.611-1.4 3.784-3.101-.746-.71-1.173-1.674-1.173-2.852 0-2.41 1.919-4.634 4.53-4.856.746-2.183 1.172-4.165 1.172-5.504 0-1.981-.959-2.664-2.078-2.523zM51.582 16.1c-2.611.329-4.689-1.606-4.689-4.123 0-2.625 2.078-4.922 4.689-5.251 2.505-.315 4.69 1.445 4.69 4.069 0 2.518-2.185 4.989-4.69 5.305zM15.4 36.94L9.645 52.127l-8.473 1.068 11.884-31.172c1.492-3.883 5.222-8.424 10.551-9.095l1.546 4.412s-2.718 1.467-4.317 5.525l-3.251 8.39c6.289 2.743 14.495-3.593 14.495-11.842 0-4.339-2.344-9.56-10.551-8.526-9.486 1.194-14.495 9.003-14.495 14.252 0 2.571 1.226 4.773 1.226 4.773l-5.649 4.943s-2.612-3.688-2.612-8.723c0-7.713 6.129-19.948 21.53-21.888 13.109-1.651 18.652 6.007 18.652 14.095 0 11.141-10.445 22.742-24.781 18.601z" />
            </svg>

            </div>
            <nav className="header__nav"><a className="header__nav-link" href="#">Order Online</a><a className="header__nav-link" href="#">About</a><a className="header__nav-link" href="#">News</a><a className="header__nav-link _size-m _bold _hover-2" href="tel:54548779654">54-548-779-654</a></nav>
          </div>
        </div>
      </header>
      <main>
        <section className="section _bg-red">
          <div className="container">
            <div className="swiper-pagination" />
            <div className="slider" ref={SliderWrapRef}>
              <Slider />
              <div className="swiper-pagination" />
              <div className="slider__btns" />
              {/* <div className="slider__btns">
                <div className="slider__btns-wrap">
                  <div className="slider__btn _active"></div>
                  <div className="slider__btn"></div>
                  <div className="slider__btn"></div>
                  <div className="slider__btn"></div>
                  <div className="slider__btn"></div>
                  <div className="slider__btn"></div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <div ref={PseudoMenuRef} />
        <div ref={MenuFoodRed}>
          <FoodMenu />
        </div>
        {children}
      </main>
      <footer className="footer _bg-dark">
        <div className="container">
          <div className="footer__wrap">
            <div className="footer__socials"><a className="footer__socials-item" href="" target="blank"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" className="svg-inline--fa fa-facebook-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg></a><a className="footer__socials-item" href="" target="blank"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a><a className="footer__socials-item" href="" target="blank"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a><a className="footer__socials-item" href="" target="blank"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" className="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></a><a className="footer__socials-item" href="" target="blank"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg></a></div>
            <div className="footer__logo"><svg xmlns="http://www.w3.org/2000/svg" width="201" height="54">
              <path fill="#FFF" fill-rule="evenodd" d="M187.839 24.38c-2.665 3.443-6.395 6.109-11.138 6.706-5.621.708-9.073-1.81-9.981-6.334-3.067 4.787-6.423 8.4-10.587 8.925-4.157.523-8.58-2.026-4.743-11.99l1.705-4.554c.427-1.125.48-1.667.48-1.935 0-1.071-1.173-1.888-2.611-2.938-1.439 3.554-2.771 6.346-4.262 9.158v.002c-4.156 7.808-9.325 14.619-15.827 15.438-5.542.698-6.235-3.661-6.235-3.661s-3.677 4.909-8.367 5.5c-3.736.471-5.748-2.038-5.995-5.518-3.035 4.212-6.38 7.077-10.79 7.632-6.608.832-8.1-4.282-13.696 1.029l-2.771-3.347 16.627-17.199c-1.652-.113-3.624-.883-5.862-.601-2.451.309-3.57 1.736-7.034 8.277l.001.001c-4.476 8.277-8.74 14.545-15.508 15.398-6.608.832-8.1-4.283-13.695 1.028l-2.771-3.347 16.626-17.199c-1.652-.113-3.623-.883-5.862-.601-2.451.309-3.57 1.736-7.034 8.277l.001.001c-4.104 7.748-9.433 14.633-15.561 15.404-4.849.611-8.26-2.815-4.37-13l6.022-15.703 8.473-1.068-6.555 17.216c-2.451 6.416-1.492 7.045-.586 6.931 2.132-.269 5.809-4.481 9.592-11.546v-.001c4.476-8.383 5.702-14.323 12.097-15.128 4.369-.551 8.366 1.624 13.589-1.016l2.771 3.347-15.614 16.268c2.451.067 4.423 1.8 7.141 1.458 1.971-.249 4.636-1.709 8.259-8.485l-.001-.001c4.477-8.384 5.703-14.323 12.097-15.129 4.37-.55 8.367 1.625 13.59-1.015l2.771 3.347L96.61 30.675c2.452.066 4.424 1.8 7.141 1.458 1.925-.243 4.513-1.655 8.006-8.026 2.078-6.872 6.364-14.835 13.203-15.696 5.169-.651 6.341 3.54 6.341 3.54l9.966-4.898-6.608 17.223c-2.398 6.355-1.492 7.044-.533 6.923 2.131-.268 5.755-4.473 9.591-11.544l-.001-.002c1.172-2.237 2.665-5.477 4.21-9.1-.959-.897-1.652-1.72-1.652-3.059 0-2.732 2.824-5.98 5.009-6.952l3.464 1.492-1.705 4.5c2.185 1.653 8.74 3.827 8.74 7.845 0 .642-.16 1.466-.64 2.758l-1.492 3.991c-2.451 6.308-1.172 7.004-.426 6.91 1.471-.186 3.98-3.736 7.982-11.053 1.795-6.833 6.918-14.767 15.784-15.883 6.448-.813 10.018 2.487 10.018 8.701 0 2.946-.799 6.635-2.398 10.104 2.611-.757 5.223-3.068 7.407-7.093 1.12-.034 2.558.803 2.985 1.767-2.878 5.344-7.727 9.543-13.163 9.799zm-61.174-9.221c-4.21.53-8.153 11.044-8.153 14.472 0 1.392.639 1.901 1.705 1.766 2.931-.368 5.382-4.534 5.382-4.534l3.464-9.006s-.053-2.993-2.398-2.698zm56.218-8.473c-4.21.53-8.313 12.295-8.313 16.259 0 1.714.799 2.738 2.078 2.577 1.279-.161 2.611-1.4 3.784-3.101-.746-.71-1.173-1.674-1.173-2.852 0-2.41 1.919-4.634 4.53-4.856.746-2.183 1.172-4.165 1.172-5.504 0-1.981-.959-2.664-2.078-2.523zM51.582 16.1c-2.611.329-4.689-1.606-4.689-4.123 0-2.625 2.078-4.922 4.689-5.251 2.505-.315 4.69 1.445 4.69 4.069 0 2.518-2.185 4.989-4.69 5.305zM15.4 36.94L9.645 52.127l-8.473 1.068 11.884-31.172c1.492-3.883 5.222-8.424 10.551-9.095l1.546 4.412s-2.718 1.467-4.317 5.525l-3.251 8.39c6.289 2.743 14.495-3.593 14.495-11.842 0-4.339-2.344-9.56-10.551-8.526-9.486 1.194-14.495 9.003-14.495 14.252 0 2.571 1.226 4.773 1.226 4.773l-5.649 4.943s-2.612-3.688-2.612-8.723c0-7.713 6.129-19.948 21.53-21.888 13.109-1.651 18.652 6.007 18.652 14.095 0 11.141-10.445 22.742-24.781 18.601z" />
            </svg>

            </div>
            <div className="footer__links"><a className="footer__link" href="">Pizzaro Restaurant</a><a className="footer__link" href="https://goo.gl/maps/t4ur8XGWvLmvKcj86" target="_blank">901-947 South Drive, Houston, TX 77057, USA</a><a className="footer__link" href="tel:15551234">Telephone: +1 555 1234</a><a className="footer__link" href="">Fax: +1 555 4444</a></div>
            <div className="footer__copyright">Copyright © 2016 Pizzaro Theme. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
};