/* eslint-disable react/prop-types */
function NavButton({ text, pageLink }) {
  return (
    <div className="navBtn">
      <a href={pageLink}>
        <button>
          {text}
        </button>
      </a>
    </div>
  );
}

export default NavButton;