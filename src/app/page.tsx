
import MainPage from "./structure/mainpage";
import SideBar from "./structure/sidebar";
import { promises as fs } from 'fs';
import { JSONContent } from "./data/data";
import BackgroundDesign from "./elements/backgroundDesign";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
  const data : JSONContent = JSON.parse(file);

  return (
    <main className="flex bg-background">
      <SideBar/>
      <MainPage {...data}/>
    </main>
  );
}
