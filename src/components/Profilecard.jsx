import React from 'react'
import profiles from '../data/Profileinfo.json'

export default function Profilecard() {

    const profile = profiles[2];

    return (
        <>
            {
                <div key={profile.id}>
                    <div class="p-5 z-0">
                        <div
                            class="mt-5 max-w-[650px] bg-[#2d2f34] rounded-2xl m-auto flex flex-col md:flex-row drop-shadow-2xl overflow-hidden">
                            <div class="w-full md:w-[300px] h-[300px]">
                                <img src={profile.Image} class="w-full h-full object-cover"
                                    alt={profile.Name} />
                            </div>
                            <div class="text-white flex flex-col justify-center space-y-3 p-5 w-full md:w-6/12">
                                <h1 class="text-2xl font-bold">{profile.Name}</h1>
                                <h2 class="text-xl">{profile.Role}</h2>
                                <p class="text-base text-gray-300">
                                    {profile.Description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </>

    )
}
