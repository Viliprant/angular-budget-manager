const now = new Date().getFullYear()

export enum ChartPeriod {
    MONTHLY = 'monthly',
    YEARLY = 'yearly',
}

export const period: { [key in ChartPeriod]: string[] } = {
    [ChartPeriod.MONTHLY]: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'],
    [ChartPeriod.YEARLY]: [(now - 3).toString(), (now - 2).toString(), (now - 1).toString(), now.toString()],
}