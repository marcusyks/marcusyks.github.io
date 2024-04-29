// Copyright 2024 marcu
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Badge } from "@/components/ui/badge";

export default function SkillCardIntroduction(){
    return(
        <div className='text-xl flex flex-col lg:gap-4 w-full lg:justify-evenly p-2 lg:flex-row'>
            <div>
                <Badge className="p-1 bg-green-300 animate-pulse mx-2"/>
                <span> means <b>proficient</b></span>
            </div>
            <div>
                <Badge className="p-1 bg-yellow-300 animate-pulse mx-2"/>
                <span> means <b>competent</b></span>
            </div>
            <div>
                <Badge className="p-1 bg-orange-300 animate-pulse mx-2"/>
                <span> means <b>novice</b></span>
            </div>
        </div>
    )
}