import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* meta end */}

          {/* public assets begin */}
          <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
          <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
          <link rel="stylesheet" href="/css/plugins/swiper.min.css" /> 
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-J26ZP3Z61E"></script>
          <script dangerouslySetInnerHTML={{
             __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-J26ZP3Z61E');
              `
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.TUSCLICKS_OPTIONS = {"header":"Estoy listo para hablar contigo :)","connections":[{"title":"Whatsapp","connection":"+56988639774","type":"whatsapp","id":523}],"useColourOnButton":false,"colour":"#03E26B","rightPosition":true,"activePopupConfig":true,"pageAmount":1,"timeAmount":20,"fontColor":true,"language":"es","type":"whatsapp","id":null,"gtmId":"G-","source":"tusclicks.com"};
              `,
            }}
          />
          <script defer src="https://tusclicks.com/embed/whatsapp-widget.min.js"></script>
          <script src="https://unpkg.com/@botpoison/browser" async></script>
          {/* public assets end */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
