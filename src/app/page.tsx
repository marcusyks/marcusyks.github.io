
import Sidebar from "./structure/sidebar";
import MainPage from "./structure/mainpage";
import MobileSideBar from "./structure/mobilesidebar";
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
  const data : JSON = JSON.parse(file);

  return (
    <main className="flex bg-background">
      <Sidebar/>
      <MobileSideBar/>
      <MainPage data={data}/>
    </main>
  );
}
