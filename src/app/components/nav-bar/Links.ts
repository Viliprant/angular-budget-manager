export type Link = {
    name: string,
    displayName: string,
    iconClass?: string, // FONT AWESOME 4
    path: string
}

export const Links: Link[] = [
    {
        name: 'Home',
        displayName: 'Budget Manager',
        path: '/dashboard',
    },
    {
        name: 'Dashboard',
        displayName: 'Dashboard',
        iconClass: 'fa fa-pie-chart',
        path: '/dashboard',
    },
    {
        name: 'Income',
        displayName: 'Income',
        iconClass: "fa fa-chevron-circle-down",
        path: '/income',
    },
    {
        name: 'Outcome',
        displayName: 'Outcome',
        iconClass: "fa fa-chevron-circle-up",
        path: '/outcome',
    }
]