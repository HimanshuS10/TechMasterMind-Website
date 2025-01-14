import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-[rgba(37,99,235)] shadow-[0px_0px_12px_#8c45ff]">
                <div className="absolute inset-0">
                    <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]">
                    </div>
                    <div className="border rounded-lg border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]">
                    </div>
                    <div className="border rounded-lg border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]">
                    </div>
                </div>
                <span>{props.children}</span>
            </button>

        </div>
    )
}
