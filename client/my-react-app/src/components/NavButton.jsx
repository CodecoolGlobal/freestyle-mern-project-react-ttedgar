/* eslint-disable react/prop-types */
function NavButton({ text, pageLink }) {
  return (
    <a href={pageLink}>
      <button>
        {text}
      </button>
    </a>
  );
}

export default NavButton;