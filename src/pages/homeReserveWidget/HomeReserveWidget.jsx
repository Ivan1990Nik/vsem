import { useEffect } from "react";

export default function HomeReserveWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://homereserve.ru/widget.js";
    script.type = "module";
    script.async = true;

    script.onload = () => {
      if (window.homereserve) {
        window.homereserve.initWidgetSearch({
          token: "P4ZmUqmKax",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>выберите дату для бронирования </h2>
      <div id="hr-widget"></div>;
    </>
  );
}
