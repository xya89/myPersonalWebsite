// some icons used in this component
export function CalendarIcon() {
    return (
        <svg
            className="h-4 w-4 text-gray-500 mr-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            strokeLinecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <line x1="16" y1="3" x2="16" y2="7" />
            <line x1="8" y1="3" x2="8" y2="7" />
            <line x1="4" y1="11" x2="20" y2="11" />
            <rect x="8" y="15" width="2" height="2" />
        </svg>
    )
}
export function LocationIcon() {
    return (
        <svg
            className="h-4 w-4 text-gray-500 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </svg>
    )
}