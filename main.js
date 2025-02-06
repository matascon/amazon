let li;
let p;
let div;
let a;

//NAV-SECONDARY-SUPERMARKET
const navSecondarySupermarket = [
  {
    name: 'fresh',
    link: 'https://www.amazon.es/alm/storefront?almBrandId=QW1hem9uIEZyZXNo&ref=nav_cs_dsk_grfl_stfr_fs',
    img: 'assets/shop/navSupermercado_1.png',
  },
  {
    name: 'dia',
    link: 'https://www.amazon.es/alm/storefront?almBrandId=TGEgUGxhemEgZGUgRGlh&ref=nav_cs_dsk_grfl_stfr_DIA',
    img: 'assets/shop/navSupermercado_2.png',
  },
  {
    name: 'Mercado de la paz',
    link: 'https://www.amazon.es/alm/storefront?almBrandId=TWVyY2FkbyBkZSBMYSBQYXo&ref=nav_cs_dsk_grfl_stfr_lapaz',
    img: 'assets/shop/navSupermercado_3.png',
  },
  'https://www.amazon.es/b?ie=UTF8&node=6198073031&ref=nav_cs_dsk_grfl_sag'
];

li = document.querySelector('.nav-secondary > ul > li:nth-child(2)');

const divNavSecondarySupermarket = document.createElement('div');
divNavSecondarySupermarket.className = 'nav-secondary-supermarket'

p = document.createElement('p');
p.innerText = 'Compra protuctos de supermercado';

div = document.createElement('div');

navSecondarySupermarket.forEach((item) => {
  if(typeof(item) === 'object') {
    const a  = document.createElement('a');
    a.href = item.link;
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = `Logo de ${item.name}`;
    a.appendChild(img);
    div.appendChild(a);
  }
});

a = document.createElement('a');
a.href = navSecondarySupermarket[navSecondarySupermarket.length - 1];
a.innerText = 'Compra todos los alimentos en Amazon';

divNavSecondarySupermarket.appendChild(p);
divNavSecondarySupermarket.appendChild(div);
divNavSecondarySupermarket.appendChild(a);

li.appendChild(divNavSecondarySupermarket);



// NAV-SECONDARY-GIFTCARDS

const navSecondaryGiftcards = [
  {
    link: 'https://www.amazon.es/b?rw_useCurrentProtocol=1&node=3564279031&ref=nav_cs_gift_cards_amazon_gift_cards&pf_rd_p=69d9e330-35af-4027-883b-7d8b4539e144&pf_rd_r=F0K7DY3K5CW78EGFY300&ref_=amb_link_S8sJYA93SaKGJWg8W6Ujlw_2',
    img: 'assets/shop/navTarjetasRegalo_1.jpg',
    altImg: 'Tarjetas regalo de amazon'
  },
  {
    link: 'https://www.amazon.es/b?rw_useCurrentProtocol=1&node=23033909031&ref=nav_cs_gift_cards_specialty_gift_cards&pf_rd_p=44032f7b-bf47-41c0-a8dc-e0c685d2c142&pf_rd_r=F0K7DY3K5CW78EGFY300&ref_=amb_link_JZsFr3cjTB63_I6hTP7oyg_2',
    img: 'assets/shop/navTarjetasRegalo_2.jpg',
    altImg: 'Tarjetas de regalo de otra marca'
  },
  {
    link: 'https://www.amazon.es/gc/balance/%26ref%3Dnav_cs_gift_cards_manage_balance?rw_useCurrentProtocol=1&pf_rd_p=5f638b41-f28e-4ee8-aead-e68050f94208&pf_rd_r=F0K7DY3K5CW78EGFY300&ref_=amb_link_xTRyITqjQP2D9Ly6cf5l_A_2',
    img: 'assets/shop/navTarjetasRegalo_3.jpg',
    altImg: 'Ver saldo de tu tarjeta de regalo'
  },
  {
    link: 'https://www.amazon.es/b/?rw_useCurrentProtocol=1&node=3564279031&ref=nav_cs_gift_cards_shop_all_gift_cards&pf_rd_p=e5ab1f19-f5b9-49a4-9c78-72966ae9d8d4&pf_rd_r=F0K7DY3K5CW78EGFY300&ref_=amb_link_c4_HFb5SToekke6YguIpEA_2',
    img: 'assets/shop/navTarjetasRegalo_4.jpg',
    altImg: 'Ver todas las tarjetas de regalo'
  },
  'https://www.amazon.es/b/ref=gcui_fo_e_gcfobagc_c_d?node=3564279031'
];

li = document.querySelector('.nav-secondary > ul > li:nth-child(9)');

const divNavSecondaryGiftcards = document.createElement('div');
divNavSecondaryGiftcards.className = 'nav-secondary-giftcards'

p = document.createElement('p');
p.innerText = 'Tarjetas Regalo';

div = document.createElement('div');

navSecondaryGiftcards.forEach((item) => {
  if(typeof(item) === 'object') {
    const a  = document.createElement('a');
    a.href = item.link;
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.altImg;
    a.appendChild(img);
    div.appendChild(a);
  }
});

a = document.createElement('a');
a.href = navSecondaryGiftcards[navSecondaryGiftcards.length - 1];
a.innerText = 'Ver más';

divNavSecondaryGiftcards.appendChild(p);
divNavSecondaryGiftcards.appendChild(div);
divNavSecondaryGiftcards.appendChild(a);

li.appendChild(divNavSecondaryGiftcards);



// BANNER

const banner = {
  name: 'banner',
  link: 'https://www.primevideo.com/-/es/detail/0HU52DR3U1R0FGI3KSUL00XYY7/ref=dvm_src_ret_es_xx_s',
  img: 'assets/shop/serieCrossAmazon.jpg',
  altImg: 'Serie cross de Amazon'
}

const divStore = document.querySelector('.store');

div = document.createElement('div');
div.className = `${banner.name}`;

a = document.createElement('a');
a.href = banner.link;

img = document.createElement('img');
img.src = `${banner.img}`;
img.alt = `${banner.altImg}`;

a.appendChild(img);
div.appendChild(a);
divStore.appendChild(div);



// PRODUCTS

div = document.createElement('div');
div.className = 'products';
div.innerHTML = `<div>
						<p>Seguir comprando ofertas</p>
						<div>
							<a href="https://www.amazon.es/ACER-Nitro-N50-640-Ordenador-Sobremesa/dp/B0C5NGBLPK/ref=sr_1_31?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&nsdOptOutParam=true&sr=8-31">
								<img src="assets/shop/seguirComprando_1.jpg" alt="Ordenador de sobremesa">
							</a>
							<a href="https://www.amazon.es/sspa/click?ie=UTF8&spc=MToyNjA0MTQyODIwMTA1ODk6MTczMjM3MDQwNjpzcF9zZWFyY2hfdGhlbWF0aWM6MzAwMjIzNjc4MTgzMzMyOjoyOjo&url=%2FSABRENT-Carcasa-Instalaci%25C3%25B3n-Herramientas-EC-DFLT%2Fdp%2FB00LS5NFQ2%2Fref%3Dsxin_14_pa_sp_search_thematic_sspa%3F__mk_es_ES%3D%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591%26content-id%3Damzn1.sym.38b333c4-b90e-4529-9b20-5a7dc5bbbda4%253Aamzn1.sym.38b333c4-b90e-4529-9b20-5a7dc5bbbda4%26crid%3D2H0O37O86L5A%26cv_ct_cx%3Dporta%2Bdisco%2Bduro%26dib%3DeyJ2IjoiMSJ9.FEzFDfF5lWE8efDC43BFwIwpk46rTMI28XGDH4xx6GiuJmIhZrpf_rtYGCS2vNe8jZHmkuTnWRXabqasB-llng.dPtu3fsRrIxHoFs_bYWnM4jQaXxDq8FjcgUTdMSKO8A%26dib_tag%3Dse%26keywords%3Dporta%2Bdisco%2Bduro%26nsdOptOutParam%3Dtrue%26pd_rd_i%3DB00LS5NFQ2%26pd_rd_r%3D8f8fe36c-3edb-4bae-8608-5658f38c0570%26pd_rd_w%3DhBwsT%26pd_rd_wg%3Da2UlC%26pf_rd_p%3D38b333c4-b90e-4529-9b20-5a7dc5bbbda4%26pf_rd_r%3DABHKYGRZ1MCWFVNZHC2E%26qid%3D1732370406%26sbo%3D9ZOMT9Jm0JH%252Ft%252BWi68iDSA%253D%253D%26sprefix%3Dporta%2Bdisco%2Bduro%252Caps%252C105%26sr%3D1-3-97a82297-f7fb-4a30-8d99-9ef5954f8dec-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1">
								<img src="assets/shop/seguirComprando_2.jpg" alt="Carcasa para disco duro">
							</a>
							<a href="https://www.amazon.es/NiPoGi-Computadora-Ethernet-Pantalla-Comercio/dp/B0CQT8NMPM/ref=sr_1_15?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=AWLCDOCY3YVS&dib=eyJ2IjoiMSJ9.b9fN0qRXCCx7hsEX4oPn_K-47ljgoK5K64U4mQvq48MWpes3dEbJ67fv4ET5Pr8a9F2-2cAwrESrKdGfeQgigoXIXMd6grcslKO1FauZcB309M5s08QgRHJoCsWZ75t9nza6tGbOQ-ptp5-dGxOpLVz3tXyPA-CD4PacwtxkvM30ItC2_NsYKe_W27cqcICh_LbEJF1Ck6jCHdC2dbjkC01114Hu8zFzDeAalZA1pxe5HjiH8CWmWuOujKq4YqGTVT7Xoq-L7nBJ5uYTpOuSZagUZN-rcZWlcsfKKyI41Dc.5rf_0JTSg7lvuJSkPeOr_4dgdyFfxqiyPDsSYbb7_G0&dib_tag=se&keywords=kamrui&nsdOptOutParam=true&qid=1732370499&sprefix=kamrui%2Caps%2C104&sr=8-15">
								<img src="assets/shop/seguirComprando_3.jpg" alt="Mini pc gamer">
							</a>
							<a href="https://www.amazon.es/UGREEN-Carcasa-Altura-Conexi%C3%B3n-Extra%C3%ADble/dp/B06XWSDGP6/ref=sr_1_9?crid=1B3QRM2SEJFWS&dib=eyJ2IjoiMSJ9.Ek5EimRdkofVbiDPgbN1MPHjROGaBuEr4MOP5t8xdjK5QEPqLsF5I1weD3DZ87u4bbFyxATPh6nzBzVWxWT3iQxFN3t7zR9rtj-OWvoaEzfffuN3fMC8GbXYxQkT0eBq6zENzRvj1F9VxkTZ0S6VYllH2i5Fcl5r0hubPwC-b9gUE5HVAP0gtlwB7hwvgqZ6am3W2VqIwWeXnXCOB1BhJ_h41Jt14tax-a2ibn_ZEWenxJhxFfcmPObjRoTyhVRNqovQSoE_ZNkOVwixOkBcaRr2cvofU0z6IBdgML3tSgg.jSeJbgasCwpISakQs4bjpTFDzPTZsNPwPEmVhd5YKBs&dib_tag=se&keywords=ugreen+carcasa+disco+duro&nsdOptOutParam=true&qid=1732370575&sprefix=uggreen+carcasa+disco+%2Caps%2C118&sr=8-9">
								<img src="assets/shop/seguirComprando_4.jpg" alt="Carcasa de disco duro">
							</a>
						</div>
						<a href="https://www.amazon.es/blackfriday?ref_=dealz_cs_see_more&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522">Ver todas las ofertas</a>
					</div>
					<div>
						<p>Oferta Top</p>
						<div>
							<a href="https://www.amazon.es/Google-Smartphone-teleobjetivo-autonom%C3%ADa-pantalla/dp/B0CGVVVDXW/ref=sr_1_7?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3HHDKAEH895MM&dib=eyJ2IjoiMSJ9.6QnI4cJ2lTWBqmz182oacMymAiMaNGBNo_JN0RF5D4BOHY4iZl2eX7sAlzRo1QsKbv4VuT1ErYNS7JiB1kQOOhPHWJVP_EZ4BzVAdFg-Kjk1Na_WlwYqE5tLqEDoTFM3SliyasPd3GuMReWBF6WOxblKrxJfiSMIe3a-yfuZKAcwlhvi3vs3GKVo7GJ7p_1yCX1oBvVYXdwik6tCZThHvywDKEhEeGSzVLUgxwXpnxAthtsWovKgrf7vCEYTZcKXP4B8aH_zU8dlcs4_7uLTcoaz9dr3J2s_ZFZMff1IfE0.fwUUupcO-McLgro8F4Rg8yDmWwKDmibUQT7ODI8UMPM&dib_tag=se&keywords=google+pixel+8&nsdOptOutParam=true&qid=1732374326&sprefix=google+pixel+8a%2Caps%2C121&sr=8-7">
								<img src="assets/shop/ofertaTop_1.jpg" alt="Celular móvil">
							</a>
							<a href="https://www.amazon.es/Notebook-monitor-i7-13650HX-GeForce-teclado/dp/B0D797MV6N/ref=sr_1_28?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1VJOKRK70YEV4&dib=eyJ2IjoiMSJ9.FqIB3Y5BoCkGX1RTX9TvAtbpvXOEoQBmKqGE8Vdpg6hGk9uT-6-w1P_mxd2Zxi8w0b2SwOmHpJaE0WXOp2GnDT0WyOfKVNhKTtyLr3CvVvpf6C1P_4uBFRx2U79HK3mDR6R3gWjpxmS_SYcmt-DTvpfX7uujV5zDO9SYjb1Z8ynI-hE2iQOHr83_QyfjsIp5hHPMz-cICyvzzO2lZRBSEBBCat51NuJBKEuGfBG3rlPQNMI2FNoXaE6s70zOAsHqUEGV5_W2ELE-SK-HdH4zV1h9mYPlKq_pq4Yeu01N9io.kjfYM9V3dLIvRrhHNktdrODS85il3QPkMNxn2bP26-c&dib_tag=se&keywords=asus+tuf+gaming&nsdOptOutParam=true&qid=1732374393&sprefix=asus+tuf+gaming%2Caps%2C129&sr=8-28">
								<img src="assets/shop/ofertaTop_2.jpg" alt="Ordenador portatil">
							</a>
							<a href="https://www.amazon.es/sspa/click?ie=UTF8&spc=MToxNTgzOTcwNDIwNDA2NDEzOjE3MzIzNzQzMjc6c3BfYXRmOjMwMDE3NDAwNDYxMDYzMjo6MDo6&url=%2FGoogle-Pixel-Smartphone-Funciones-Seguridad%2Fdp%2FB0CXJ9XSVZ%2Fref%3Dsr_1_2_sspa%3F__mk_es_ES%3D%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591%26crid%3D3HHDKAEH895MM%26dib%3DeyJ2IjoiMSJ9.6QnI4cJ2lTWBqmz182oacMymAiMaNGBNo_JN0RF5D4BOHY4iZl2eX7sAlzRo1QsKbv4VuT1ErYNS7JiB1kQOOhPHWJVP_EZ4BzVAdFg-Kjk1Na_WlwYqE5tLqEDoTFM3SliyasPd3GuMReWBF6WOxblKrxJfiSMIe3a-yfuZKAcwlhvi3vs3GKVo7GJ7p_1yCX1oBvVYXdwik6tCZThHvywDKEhEeGSzVLUgxwXpnxAthtsWovKgrf7vCEYTZcKXP4B8aH_zU8dlcs4_7uLTcoaz9dr3J2s_ZFZMff1IfE0.fwUUupcO-McLgro8F4Rg8yDmWwKDmibUQT7ODI8UMPM%26dib_tag%3Dse%26keywords%3Dgoogle%2Bpixel%2B8%26nsdOptOutParam%3Dtrue%26qid%3D1732374326%26sprefix%3Dgoogle%2Bpixel%2B8a%252Caps%252C121%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1">
								<img src="assets/shop/ofertaTop_3.jpg" alt="Celular móvil">
							</a>
							<a href="https://www.amazon.es/ASUS-Vivobook-%E2%80%8E16X-90NB11F2-Ordenador/dp/B086ZSWSJM/ref=sr_1_27?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=DJNHLH11GK0O&dib=eyJ2IjoiMSJ9.1cRaVEvP5rtjuMSfCgBBXCRMJsfw9vbd7yYeiXYQbKV2v1hxTtXNviA4f8xLDFGgG2Ib7_RnTuCgAJ5uvZ9jbkmIHWx-MCZesKpwBLLSu2vMRn1cjJIC046V8YVuiucOoQnH1apNe6z4tYHxT2gJXSFT_4Jldxn3yegT5DpZo8PsPJzAV0W6XEEi3Jew1VrAU0fSTDEcgFyqcjWagmfJFRa9WSaCED0Kepp-sqriuZUbU93Ev-jyUG5CU-LdMis79RpBkLkLNVXB32Kp41ZVazz0JnIlxGB8uye67zrYhls.KTnQAbTpRGtRvX-kbaNd-oMf-9awUf-uX_bDxFm2MCk&dib_tag=se&keywords=asus+laptop&nsdOptOutParam=true&qid=1732374446&sprefix=asus+laptop%2Caps%2C134&sr=8-27">
								<img src="assets/shop/ofertaTop_4.jpg" alt="Ordenador portatil">
							</a>
						</div>
					</div>
					<div>
						<p>La Semana de Black Friday está cerca</p>
						<a href="https://www.amazon.es/blackfriday?ref_=sxts_snpl_1_0_4c8fa6d2-daaf-4b8b-8b15-0590e06b9f6e&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522">
							<img src="assets/shop/semanaBlackFriday.jpg" alt="Paquetes con luces">
						</a>
						<a href="https://www.amazon.es/blackfriday?ref_=sxts_snpl_1_0_4c8fa6d2-daaf-4b8b-8b15-0590e06b9f6e&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522">Ver más</a>
					</div>
					<div>
						<p>Ofertas para ti</p>
						<a href="https://www.amazon.es/s?k=ofertas+para+mi&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91">
							<img src="assets/shop/ofertasParaTi.jpg" alt="Etiqueta de descuentos">
						</a>
						<a href="https://www.amazon.es/s?k=ofertas+para+mi&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91">Explora ahora</a>
					</div>
					<div>
						<p>Ofertas en Outlet</p>
						<a href="https://www.amazon.es/s?k=ofertas+outlet+liquidacion&crid=1J5VLQFK6YCT1&sprefix=ofertas+ou%2Caps%2C135&ref=nb_sb_ss_ts-doa-p_1_10">
							<img src="assets/shop/ofertasOutlet.jpg" alt="Hombre con bolsas de compra">
						</a>
						<a href="https://www.amazon.es/s?k=ofertas+outlet+liquidacion&crid=1J5VLQFK6YCT1&sprefix=ofertas+ou%2Caps%2C135&ref=nb_sb_ss_ts-doa-p_1_10">Explora ahora</a>
					</div>
					<div>
						<p>Prepárate para las fiestas</p>
						<div>
							<a href="https://www.amazon.es/Navidad-Artificial-Relleno-Met%C3%A1lico-180-240cm/dp/B07RPJR64T/ref=sr_1_7?crid=3NVYTPX4TIXK9&dib=eyJ2IjoiMSJ9.R05AD5eDpsX45vADus48a02oAgBlUhTpVCQu_S2j74B3ZckPaZlcVQZWju1ZNu3GpnVy77ay_uJjkJEBTEW314A-3oa6thGUyZ9pl-iPBD6JoRNG1Nugzlc34_40QeGkt2aX1H7014OJlrURWQJqv_5Ra2Yumu26sNSw4keRIWoxDueUI0ZIC0HObWca5giWlm0xkcW92zklSOubvKpTeWrIY-1WwI6I9hpdhZk0fyRMzw2sCf-XKJ5KIEnmBPrEoPwW46EJZkN4mkEZVg9FDp0Cb-rTqc-Irg7cyQg9sMo.2CWC6D7L8qnRJJpulH-rmrn1fYvlqmEKxw1w0JtcdlE&dib_tag=se&keywords=arbol+de+navidad&nsdOptOutParam=true&qid=1732376526&sprefix=arbol+%2Caps%2C131&sr=8-7">
								<img src="assets/shop/fiestas_1.jpg" alt="Arbol de navidad">
							</a>
							<a href="https://www.amazon.es/s?k=ropa+navidad&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=15KZL3Y5USLVZ&sprefix=ropa+navidad%2Caps%2C117&ref=nb_sb_noss_1">
								<img src="assets/shop/fiestas_2.jpg" alt="Ropa para navidad">
							</a>
							<a href="https://www.amazon.es/s?k=decoracion+navidad&crid=5N1HFS594ASG&sprefix=decora%2Caps%2C106&ref=nb_sb_ss_ts-doa-p_1_6">
								<img src="assets/shop/fiestas_3.jpg" alt="Decoracion de navidad">
							</a>
							<a href="https://www.amazon.es/dp/B0DMQ7K869/ref=sr_1_39?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=16MF7JVX63OTR&dib=eyJ2IjoiMSJ9.M7Va5wUGxonhpNzMQXgRtGicl7eTe3Bej46VI_HuEJOLVskev1aU7R1vLkeEv8o7nDFb6YJaCaueBqzb6lEHjmRfS8HuKp1CaWWXtLT7aPdUbsRcwMwqLZRu0vUyi0PLXqdg0JCQ_GpjYYE-Fus1B_sgW__Vc6j-n5Aa_WODKhumQE0HR9yDsWIGsXUNr8ftte2PAs6QvK5Eb0Mmq_HtmMTOX6VqJfAiaD44t1xG5Le4YJ1EnbamIEpiNjYEr4pEpsDTqfNPtWMwr6HpxaIZEZr-RrsSrs8ERu1mOPIiW5U.T5bMdnPU8Llwpm1c3aySrhp4zFhQNAr90z2mZSbSEhs&dib_tag=se&keywords=shade+plato+de+madera+navidad&nsdOptOutParam=true&qid=1732376665&sprefix=shade+plato+de+madera+navidad%2Caps%2C79&sr=8-39">
								<img src="assets/shop/fiestas_4.jpg" alt="Plato de madera con forma de reno">
							</a>
						</div>
						<a href="https://www.amazon.es/s?k=navidad&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91">Ver más</a>
					</div>
					<div>
						<p>Ofertas en productos usados</p>
						<a href="https://www.amazon.es/Segunda-mano/b/?ie=UTF8&node=3582001031&ref_=sv__4">
							<img src="assets/shop/productosUsados.jpg" alt="Productos usados">
						</a>
						<a href="https://www.amazon.es/Segunda-mano/b/?ie=UTF8&node=3582001031&ref_=sv__4">Descubre más</a>
					</div>
					<div>
						<p>Informática y accesorios</p>
						<a href="https://www.amazon.es/informatica/b/?ie=UTF8&node=667049031&ref_=nav_cs_pc">
							<img src="assets/shop/informatica&accesorios.jpg" alt="Monitor">
						</a>
						<a href="https://www.amazon.es/informatica/b/?ie=UTF8&node=667049031&ref_=nav_cs_pc">Descubre más</a>
					</div>`;

divStore.appendChild(div);

// ---> Ya sé profe, aquí he hecho el vago xddd



const gifts = [
  {
    link: 'https://www.amazon.es/s?k=regalos+para+mujer&crid=31IM66FDKZR8W&sprefix=regalos+para+%2Caps%2C122&ref=nb_sb_ss_ts-doa-p_2_13',
    img: 'assets/shop/regalosElla.jpg',
    altImg: 'Regalos para ella'
  },
  {
    link: 'https://www.amazon.es/s?k=regalos+para+hombre&crid=7JC1TV272IHR&sprefix=regalos+para+hombre%2Caps%2C118&ref=nb_sb_ss_ts-doa-p_1_19',
    img: 'assets/shop/regalosEl.jpg',
    altImg: 'Regalos para él'
  },
  {
    link: 'https://www.amazon.es/s?k=regalos+para+adolescentes&crid=3U0WYHRFNP049&sprefix=regalos+para+ad%2Caps%2C110&ref=nb_sb_ss_ts-doa-p_1_15',
    img: 'assets/shop/regalosAdolescentes.jpg',
    altImg: 'Regalos para adolescentes'
  },
  {
    link: 'https://www.amazon.es/s?k=regalos+para+ni%C3%B1os&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3Q91E1NO73D9J&sprefix=regalos+para+ni%C3%B1os%2Caps%2C126&ref=nb_sb_noss_1',
    img: 'assets/shop/regalosInfantes.jpg',
    altImg: 'Regalos para niños'
  }
];

const divGifts = document.createElement('div');
divGifts.className = 'gifts';

p = document.createElement('p');
p.innerText = 'Regalos para tus personas favoritas';

div = document.createElement('div');

for(const item of gifts) {
  a = document.createElement('a');
  a.href = item.link;
  img = document.createElement('img');
  img.src = item.img;
  img.alt = item.altImg;
  a.appendChild(img);
  div.appendChild(a);
}

divGifts.appendChild(p);
divGifts.appendChild(div);
divStore.appendChild(divGifts);