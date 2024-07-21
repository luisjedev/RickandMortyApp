import { useLocation, useNavigate } from "react-router-dom";
import { constantes } from "../utils";
import BackButtonImage from "../assets/back-button.png";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const getButtonStyle = (path: string) => {
    return location.pathname === path
      ? "underline-green text-white"
      : "bg-transparent text-gray-400 hover:text-white";
  };

  return (
    <header className="w-full bg-[#18186e] flex justify-center">
      <section className="w-full max-w-[1000px] h-[100px] pt-4 sm:pt-0 text-white flex flex-col items-center justify-between  sm:h-[60px] sm:flex-row">
        <div className="w-full flex justify-center items-start sm:justify-start sm:items-center sm:pl-4 sm:h-full">
          <h1 className="font-bold text-center">
            {constantes.APP_TITLE.toUpperCase()}
          </h1>
        </div>
        <nav className="flex w-full sm:mr-4 sm:max-w-[400px] h-[50px] sm:h-full justify-start sm:justify-end sm:align-bottom">
          {location.pathname.includes("/details") ? (
            <button className="w-7 ml-4" onClick={() => navigate(-1)}>
              <img
                className="object-cover"
                src={BackButtonImage}
                alt="volver"
              />
            </button>
          ) : (
            <>
              <button
                className={`w-full h-full px-4 pt-2 text-sm font-semibold sm:pt-0 ${getButtonStyle(
                  "/"
                )}`}
                onClick={() => navigate("/")}
              >
                {constantes.domains.EPISODES.toUpperCase()}
              </button>

              <button
                className={`w-full h-full px-4 pt-2 text-sm font-semibold sm:pt-0 ${getButtonStyle(
                  "/locations"
                )}`}
                onClick={() => navigate("/locations")}
              >
                {constantes.domains.LOCATIONS.toUpperCase()}
              </button>
            </>
          )}
        </nav>
      </section>
    </header>
  );
}
