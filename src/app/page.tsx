
import Sidebar from "./structure/sidebar";
import MainPage from "./structure/mainpage";
import MobileSideBar from "./structure/mobilesidebar";
import { promises as fs } from 'fs';
import { JSONContent } from "./data/data";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
  const data : JSONContent = JSON.parse(file);

  return (
    <main className="flex bg-background">
      <Sidebar/>
      <MobileSideBar/>
      <MainPage {...data}/>
    </main>
  );
}
