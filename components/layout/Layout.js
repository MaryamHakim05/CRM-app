import Link from "next/link"

function Layout({children}) {
  return (
    <>
      <header className="header">
        <Link href="/"><h1>CRM project</h1></Link>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="content">{children}</div>
      <footer className="footer">
        <p>Next course | CRM project</p>
      </footer>
    </>
  )
}

export default Layout
