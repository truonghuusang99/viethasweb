(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"/P7z":function(n,t,a){"use strict";a.r(t),a.d(t,"DownloadModule",(function(){return m}));var d=a("mrSG"),e=a("fXoL"),i=a("ofXK"),o=a("tyNb");let c=class{constructor(n){this.router=n}ngOnInit(){}goto_operationSystem(){this.router.navigate(["download/choose-OS"])}};c.ctorParameters=()=>[{type:o.e}],c=Object(d.__decorate)([Object(e.Component)({selector:"app-download",template:Object(d.__importDefault)(a("nuuh")).default,styles:[Object(d.__importDefault)(a("v4HH")).default]})],c);var s=a("1zsC"),r=a("hctd");let l=class{constructor(){}ngOnInit(){}};l=Object(d.__decorate)([Object(e.Component)({selector:"app-os",template:Object(d.__importDefault)(a("higp")).default,styles:[Object(d.__importDefault)(a("ejao")).default]})],l);const p=[{path:"",component:c},{path:"choose-OS",component:l}];let v=class{};v=Object(d.__decorate)([Object(e.NgModule)({imports:[o.g.forChild(p)],exports:[o.g]})],v);let m=class{};m=Object(d.__decorate)([Object(e.NgModule)({declarations:[c,l],imports:[i.CommonModule,s.a,r.a,v]})],m)},ejao:function(n,t,a){"use strict";a.r(t),t.default=".banner {\n  height: 250px;\n  width: 100%;\n  background: #f5f5f5;\n  padding-top: 80px;\n}\n.banner .title {\n  padding-top: 72px;\n  padding-bottom: 48px;\n}\n.banner .title p {\n  color: #8e8e93;\n}\n.banner .title p span {\n  color: black;\n}\n.content {\n  padding-top: 72px;\n  padding-bottom: 72px;\n}\n.content .title {\n  padding-bottom: 48px;\n}\n.content .card {\n  border: none;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n}\n.content .card .header-card {\n  background: #00a859;\n  display: flex;\n  justify-content: center;\n  min-height: 44px;\n}\n.content .card .header-card i {\n  font-size: 30px;\n  margin: auto;\n  color: #ffff;\n}\n.content .card .body-card {\n  padding: 16px;\n  margin: auto;\n}\n.content .card .body-card p {\n  color: #339966;\n}\n.content .card .body-card img {\n  width: 70%;\n}\n.content .card .body-card .row {\n  padding: 16px;\n  text-align: center;\n}\n.content .card .body-card .btn_dl {\n  display: flex;\n  justify-content: center;\n  padding-top: 30px;\n}\n.content .card .body-card .btn_dl button {\n  background: #00a859;\n  min-width: 100px;\n}"},higp:function(n,t,a){"use strict";a.r(t),t.default='<app-header></app-header>\n<div class="banner">\n  <div class="container title">\n    <h2>Ch\u1ecdn h\u1ec7 \u0111i\u1ec1u h\xe0nh</h2>\n    <p>Trang ch\u1ee7 / T\u1ea3i ph\u1ea7n m\u1ec1m /<span> Ch\u1ecdn h\u1ec7 \u0111i\u1ec1u h\xe0nh</span></p>\n  </div>\n</div>\n<div class="container content">\n  <h5 class="title">Ch\u1ecdn h\u1ec7 \u0111i\u1ec1u h\xe0nh c\u1ee7a b\u1ea1n v\xe0 t\u1ea3i v\u1ec1</h5>\n  <div class="card-deck">\n    <div class="card">\n      <div class="header-card">\n        <i class="material-icons">laptop_mac</i>\n      </div>\n      <div class="body-card">\n        <h5>B\u1ea3n c\xe0i \u0111\u1eb7t</h5>\n        <p>macOs Installer</p>\n        <div class="col btn_dl">\n          <button type="button" class="btn btn-success">T\u1ea3i v\u1ec1</button>\n        </div>\n      </div>\n    </div>\n    <div class="card">\n      <div class="header-card">\n        <i class=\'fab fa-windows\'></i>\n      </div>\n      <div class="body-card">\n        <h5>B\u1ea3n c\xe0i \u0111\u1eb7t</h5>\n        <p>Window Installer</p>\n        <div class="col btn_dl">\n          <button type="button" class="btn btn-success">T\u1ea3i v\u1ec1</button>\n        </div>\n      </div>\n    </div>\n    <div class="card">\n      <div class="header-card">\n        <i class=\'fab fa-app-store-ios\'></i>\n      </div>\n      <div class="body-card">\n        <div class="col" style="display: flex;justify-content: center;">\n          <img src="assets/img/qrsales.jpg" />\n        </div>\n        <div class="row">\n          Qu\xe9t m\xe3 QR \u0111\u1ec3 t\u1ea3i v\u1ec1 \u1ee9ng d\u1ee5ng\n        </div>\n      </div>\n    </div>\n    <div class="card">\n      <div class="header-card">\n        <i class="material-icons">android</i>\n      </div>\n      <div class="body-card">\n        <div class="col" style="display: flex;justify-content: center;">\n          <img src="assets/img/qrsales.jpg" />\n        </div>\n        <div class="row">\n          Qu\xe9t m\xe3 QR \u0111\u1ec3 t\u1ea3i v\u1ec1 \u1ee9ng d\u1ee5ng\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>'},nuuh:function(n,t,a){"use strict";a.r(t),t.default='<app-header></app-header>\n<div class="banner">\n  <div class="container title">\n    <h2>T\u1ea3i ph\u1ea7n m\u1ec1m</h2>\n    <p>Trang ch\u1ee7 / <span>T\u1ea3i ph\u1ea7n m\u1ec1m</span></p>\n  </div>\n</div>\n<div class="container content">\n  <h5>Ch\u1ecdn ph\u1ea7n m\u1ec1m mu\u1ed1n t\u1ea3i v\u1ec1</h5>\n  <div class="row">\n    <div class="col-md-4" (click)="goto_operationSystem()">\n      <div class="img-sw">\n        <img src="assets/img/products/chef.svg" />\n      </div>\n      <div class="name-sw">\n        C\xe0 ph\xea, Nh\xe0 h\xe0ng\n      </div>\n    </div>\n    <div class="col-md-4" (click)="goto_operationSystem()">\n      <div class="img-sw">\n        <img src="assets/img/products/online_shopping.svg" />\n      </div>\n      <div class="name-sw">\n        Qu\u1ea3n l\xfd B\xe1n h\xe0ng\n      </div>\n    </div>\n    <div class="col-md-4" (click)="goto_operationSystem()">\n      <div class="img-sw">\n        <img src="assets/img/products/money_transfer.svg" />\n      </div>\n      <div class="name-sw">\n        Qu\u1ea3n l\xfd Thu chi\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n'},v4HH:function(n,t,a){"use strict";a.r(t),t.default=".banner {\n  height: 250px;\n  width: 100%;\n  background: #F5F5F5;\n  padding-top: 80px;\n}\n.banner .title {\n  padding-top: 72px;\n  padding-bottom: 48px;\n}\n.banner .title p {\n  color: #8E8E93;\n}\n.banner .title p span {\n  color: black;\n}\n.content {\n  padding-top: 72px;\n  padding-bottom: 72px;\n}\n.content h5 {\n  padding-bottom: 48px;\n}\n.content .col-md-4 {\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 90% 10%;\n}\n.content .col-md-4 .img-sw {\n  display: flex;\n  justify-content: center;\n}\n.content .col-md-4 .name-sw {\n  text-align: center;\n  padding-top: 10px;\n}\n.content .col-md-4 .name-sw:hover {\n  cursor: pointer;\n}\n.content .col-md-4 .img-sw:hover {\n  cursor: pointer;\n}"}}]);