export default function Footer() {
    return <footer>
        <div style={{ marginRight: '2px' }}>&copy; 2021</div>
        <a href="https://github.com/highjun">highjun</a>
        <div style={{ margin: '2px' }}>-</div>
        <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by{' '}
            <img src="/nextjs-logo.svg" alt="NextJS" className="logo" />
        </a>

        <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
            color: inherit;
            text-decoration: none;
          }
        .logo {
            height: 2em;
        }
        `}</style>
    </footer>;
}