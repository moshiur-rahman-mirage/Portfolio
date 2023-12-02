

const Layout = ({children,className=""}) => {
  return (
    <div className={`${className} w-full h-full p-32 inline-block z-0 bg-light`}>
        {children}
    </div>
  )
}

export default Layout