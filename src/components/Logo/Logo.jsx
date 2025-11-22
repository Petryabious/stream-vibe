import "./Logo.scss"
import classNames from "classnames"

const Logo = (props) => {
  const title = "Home"
  const { loading = "lazy", className } = props

  return (
    <a
      className={classNames(className, "logo")}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        width={199}
        height={60}
        src="/logo.svg"
        loading={loading}
        alt=""
        className="logo__img"
      />
    </a>
  )
}

export default Logo
