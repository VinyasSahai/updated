import { EllipsisVerticalIcon, MagnifyingGlassIcon, MapIcon, NewspaperIcon, PhotoIcon, PlayCircleIcon } from "@heroicons/react/24/solid"
import HeaderOption from "./HeaderOption"


function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-500 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-44 border-b-[1px]">
        {/* Left  */}
        <div className="flex space-x-6">
            <HeaderOption Icon={MagnifyingGlassIcon} title='All' selected/>
            <HeaderOption Icon={PhotoIcon} title="Images"/>
            <HeaderOption Icon={PlayCircleIcon} title="Videos"/>
            <HeaderOption Icon={NewspaperIcon} title="News"/>
            <HeaderOption Icon={MapIcon} title="Maps"/>
            <HeaderOption Icon={EllipsisVerticalIcon} title="More"/>            

        </div>

        {/* Right */}
        <div className="flex space-x-4">
            <p className="link">Settings</p>
            <p className="link">Tools</p>
        </div>
    </div>
  )
}

export default HeaderOptions