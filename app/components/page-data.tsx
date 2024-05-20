import { Illustration } from "./illustration";
import { Footer } from "./footer";

export function PageData({ data }: { data: any }) {
  const date = new Date().toISOString();
  return (
    <>
      <main>
        <a
          target="_blank"
          href="https://vercel.com/new/clone?demo-title=WeatherGPT%20%E2%80%93%C2%A0ChatGPT%20Plugin%20Starter&demo-description=The%20ultimate%20ChatGPT%20Plugin%20starter%20template.%20WeatherGPT%20is%20a%20ChatGPT%20Plugin%20to%20get%20the%20weather%20of%20any%20given%20location.&demo-url=https%3A%2F%2Fweatherai.vercel.app%2F&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F7Ft2fS9gtS9XtxUNVJJENP%2F04a68855bda0524982d3c15cbd2628ac%2FCleanShot_2023-04-13_at_12.37.09.png&project-name=WeatherGPT%20%E2%80%93%C2%A0ChatGPT%20Plugin%20Starter&repository-name=Weather-Ai&repository-url=https%3A%2F%2Fgithub.com%2Fprachit082%2FWeather-Ai&from=templates&skippable-integrations=1&env=WEATHER_API_KEY&envDescription=Get%20your%20WeatherAPI%20key%20here%3A&envLink=https%3A%2F%2Fwww.weatherapi.com%2F&teamCreateStatus=hidden"
          rel="noreferrer"
          className="pill"
        >
          Deploy your own to Vercel
        </a>
        <h1>WeatherGPT</h1>
        <p className="description">
          Made With weatherapi.com
        </p>
        <Illustration />
        <div className="meta">
          <div className="info">
            <span>Your Location</span>
            <span className="region">
              <strong>{data.location.name}</strong>
            </span>
          </div>
          <div className="info">
            <span>Current Temperature</span>
            <strong>
              {data.current.temp_c}°C / {data.current.temp_f}°F
            </strong>
          </div>
        </div>
      </main>

      <Footer>
        <p>
          Generated at {date} by{" "}
          <a
            href="https://vercel.com/docs/concepts/functions/edge-functions"
            target="_blank"
            rel="noreferrer"
          >
            Vercel Edge Runtime
          </a>
        </p>
      </Footer>
    </>
  );
}
