import SidebarContent from "../elements/sidebarcontent";

export default function Sidebar() {
  return (
      <div className="bg-secondary bottom-2 left-2 top-2 fixed hidden rounded lg:block" id='sidebar'>
          <SidebarContent allow={true}/>
      </div>
  );
}